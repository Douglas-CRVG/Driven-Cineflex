import "./containerSubtitle.css";
import Subtitle from "./subtitle/Subtitle";

export default function ContainerSubtitle({text}) {
    return (
        <div className="container-subtitle">
            <Subtitle text={text}/>
            <p>{text}</p>
        </div>
    );
}