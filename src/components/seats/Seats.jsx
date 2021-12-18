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
	const [buyer, setBuyer] = useState([]);
    const [seats, setSeats] = useState([]);
    const {idSessao} = useParams();
    let buyerClone = {};

    useEffect(()=>{
        getSeats(idSessao).then((response)=>setSeats(response.data));
    },[]);
    useEffect(()=>{setBuyer(buyerClone)},[])

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
            ...buyer,
            movie: seats.movie.title,
            session: `${seats.day.date}  ${seats.name}`,
            buySeats: []
        };
    }

    console.log(seats, buyer)

    return(
        <>
            <main>
                <TitlePage
                text="Selecione o(s) assento(s)"
                />
                <ContainerSeats
                setBuyer={setBuyer}
                buyer={buyer}
                buyerClone={buyerClone}
                seats={seats.seats}
                />
                <Subtitles />
                <Inputs
                setBuyer={setBuyer}
                />
                <Button
                text="Reservar assento(s)"
                />
            </main>
            <Footer
            title={seats.movie.title}
            overview={seats.movie.overview}
            posterURL={seats.movie.posterURL}
            session={`${seats.day.weekday} - ${seats.name}`}/>
        </>
    );
}