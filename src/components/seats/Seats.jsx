import { useParams } from "react-router-dom";
import TitlePage from "../others/titlePage/TitlePage";
import ContainerSeats from "./containerSeats/ContainerSeats";
import Subtitles from "./subtitles/Subtitles";
import Button from "../others/button/Button";
import Inputs from "./inputs/Inputs";
import { useEffect, useState } from "react";
import { getSeats } from "../others/Axios";
import Footer from "../others/footer/Footer";

export default function Seats(){

    const {idSessao} = useParams();
    const [seats, setSeats] = useState([]);
    const [buySeats, setBuySeats] = ([]);
    let buyerClone = {};

    useEffect(()=>{
        getSeats(idSessao).then((response)=>setSeats(response.data));
    },[]);

    if(seats.length === 0){ 
        return (
            <main>
                <h1>
                    Carregando...
                </h1>
            </main>
        );
    } else {
        buyerClone = {
            movie: seats.movie.title,
            session: `${seats.day.date}  ${seats.name}`,
            buySeats
        };
        console.log(buyerClone);
    }

    return(
        <>
            <main>
                <TitlePage
                text="Selecione o(s) assento(s)"
                />
                <ContainerSeats
                seats={seats.seats}
                setBuySeats={setBuySeats}
                buySeats={buySeats}
                />
                <Subtitles />
                <Inputs/>
                <Button
                text="Reservar assento(s)" />
            </main>
            <Footer
            title={seats.movie.title}
            overview={seats.movie.overview}
            posterURL={seats.movie.posterURL}
            session={`${seats.day.weekday} - ${seats.name}`}/>
        </>
    );
}