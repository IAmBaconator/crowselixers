import myLogo from "./logoCrowsElixers.svg"

export default function Header() {
    return (
        <header>
            <img src={myLogo} alt="Crow's Elixers" width={50} style={{float: "left", paddingRight: 10}} />
            <h1>Crow's Elixers</h1>
            <p>Nature's magical drinks for your body.</p>
        </header>
    );
}