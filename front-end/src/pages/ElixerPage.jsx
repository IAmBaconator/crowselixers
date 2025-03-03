import { useParams } from "react-router-dom"
import elixers from "../elixer-content"

export default function ElixerPage() {

    const { name } = useParams();
    const elixer = elixers.find(e => e.name === name);

    return(
        <>
        <h1>{elixer.title}</h1>
        {elixer.content.map(p => <p key={p}>{p}</p>)}
        </>
    );
}