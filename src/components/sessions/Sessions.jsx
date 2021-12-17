import "./sessions.css";
import TitlePage from "../others/titlePage/TitlePage";
import ContainerRooms from "./session/containerRooms/ContainerRooms";
import { useParams } from "react-router-dom";

export default function Sessions() {
    const { idFilme } = useParams();
    console.log(idFilme);
    return(
        <>
            <main>
                <TitlePage text="Selecione o horário" />
                <ContainerRooms />
            </main>
        </>
    )
}