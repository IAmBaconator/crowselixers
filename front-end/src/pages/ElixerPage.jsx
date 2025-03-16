import { useParams, useLoaderData } from "react-router-dom"
import elixers from "../elixer-content"
import axios from "axios";
import CommentsList from "../CommentsList";

export default function ElixerPage() {
    const { name } = useParams();
    const { upvotes, comments } = useLoaderData();

    const elixer = elixers.find(e => e.name === name);

    return(
        <>
        <h1>{elixer.title}</h1>
        <p>This elixer has {upvotes} upvotes!</p>
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