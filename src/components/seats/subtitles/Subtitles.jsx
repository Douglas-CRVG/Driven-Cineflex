import ContainerSubtitle from "./containerSubtitle/ContainerSubtitle";
import "./subtitles.css";
export default function Subtitles(){

    return(
        <div className="subtitles">
            {["Selecionado","Disponível", "Indisponível"].map((subtitle)=> <ContainerSubtitle text={subtitle} />)}
        </div>
    )
}