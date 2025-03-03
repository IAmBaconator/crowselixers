import { Link } from "react-router-dom"

export default function ElixerList({ elixers }) {
    return (
        <>
        {elixers.map(e =>(
            <Link key={e.name} to={'/elixers/' + e.name}>
                <h3>{e.title}</h3>
                <p>{e.content[0].substring(0, 150)}</p>
            </Link>
        ))}
        </>
    )
}