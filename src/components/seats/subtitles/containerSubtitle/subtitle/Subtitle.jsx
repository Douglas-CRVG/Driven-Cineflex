import "./subtitle.css";
export default function Subtitle({text}){
    let className = "";
    if (text === "Selecionado"){
        className = "selected";
    } else if (text === "Disponível"){
        className = "available";
    } else {
        className = "unavailable";
    }

    return(
        <div className={`subtitle ${className}`}></div>
    )
}