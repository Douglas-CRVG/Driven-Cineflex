import { Link, useParams } from "react-router-dom";
import TitlePage from "../others/titlePage/TitlePage";
import ContainerSeats from "./containerSeats/ContainerSeats";
import Subtitles from "./subtitles/Subtitles";
import Button from "../others/button/Button";
import Inputs from "./inputs/Inputs";

export default function Seats(){
    const {idSessao} = useParams();
    console.log(idSessao)

    return(
        <>
            <main>
                <TitlePage text="Selecione o(s) assento(s)" />
                <ContainerSeats />
                <Subtitles />
                <Inputs />
                <Button text="Reservar assento(s)" />
            </main>
        </>
    );
}