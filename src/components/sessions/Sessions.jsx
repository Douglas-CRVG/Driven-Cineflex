import TitlePage from "../others/titlePage/TitlePage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSessions } from "../others/Axios";
import ContainerSessions from "./containerSessions/ContainerSessions";
import Footer from "../others/footer/Footer";

export default function Sessions() {
    const { idFilme } = useParams();
    const [sessions, setSessions] = useState([]);
    useEffect(() => {
        getSessions(idFilme).then((response) => setSessions(response.data))
    }, []);

    if(sessions.length === 0){ 
        return (
            <main>
                <h1>
                Carregando...
                </h1>
            </main>
        );
    }
    return(
        <>
            <main>
                <TitlePage text="Selecione o horário" />
                <ContainerSessions days={sessions.days}/>
            </main>
            <Footer title={sessions.title} overview={sessions.overview} posterURL={sessions.posterURL}/>
        </>
    )
}