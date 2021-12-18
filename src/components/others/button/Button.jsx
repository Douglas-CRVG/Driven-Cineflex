import "./button.css"

export default function Button({text}) {
    return(
        <button className="button">
            {text}
        </button>
    );
}