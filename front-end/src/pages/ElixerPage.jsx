import { useParams, useLoaderData } from "react-router-dom"
import elixers from "../elixer-content"
import axios from "axios";
import CommentsList from "../CommentsList";
import { useState } from "react";

export default function ElixerPage() {
    const { name } = useParams();
    const { upvotes: initialUpvotes, comments } = useLoaderData();
    const [upvotes, setUpvotes] = useState(initialUpvotes);
    //const [comments, setComments] = useState(initialComments);

    const elixer = elixers.find(e => e.name === name);

    async function onUpVoteClicked() {
        const response = await axios.post('/api/elixers'  + name + '/upvote');
        const updatedElixerData = response.data;
        setUpvotes(updatedElixerData.upvotes);
    }

    return(
        <>
        <h1>{elixer.title}</h1>
        <button onClick={onUpVoteClicked}>Upvote</button>
        <p>This elixer has {upvotes} upvotes</p>
        {elixer.content.map(p => <p key={p}>{p}</p>)}
        <CommentsList comments={comments} />
        </>
    );
}

export async function loader({ params }) {
    const response = await axios.get('/api/elixers/'+ params.name);
    console.log(response);
    const { upvotes, comments } = response.data;
    return { upvotes, comments };
}