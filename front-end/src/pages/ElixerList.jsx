import elixers from "../elixer-content";
import ElixerList from "../ElixerList";

export default function ElixerListPage() {

    return(
        <>
        <h1>Elixers</h1>
        <ElixerList elixers={elixers} />
        </>
    );
}