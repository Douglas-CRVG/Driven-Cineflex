import "./seats.css";
import { useParams } from "react-router-dom";
import TitlePage from "../others/titlePage/TitlePage";
import ContainerSeats from "./containerSeats/ContainerSeats";
import Subtitles from "./subtitles/Subtitles";
import Button from "../others/button/Button";
import Inputs from "./inputs/Inputs";
import { useEffect, useState } from "react";
import { getSeats } from "../others/Axios";
import Footer from "../others/footer/Footer";

export default function Seats({setBuyer, buyer}){

    const {idSessao} = useParams();
    const [seats, setSeats] = useState([]);
    const [buySeats, setBuySeats] = useState([]);
    const [buyerData, setBuyerData]=useState({});

    useEffect(()=>{
        getSeats(idSessao).then((response)=>setSeats(response.data));
    },[]);

    useEffect(()=>{
        setBuyer({...buyer})
    }, [buySeats, buyerData]);

    if(seats.length === 0){ 
        return (
            <main>
                <h1>
                    Carregando...
                </h1>
            </main>
        );
    } else {
        buyer = {
            movie: seats.movie.title,
            session: `${seats.day.date}  ${seats.name}`,
            buySeats,
            buyerData
        };
    }


    return(
        <>
            <main className="seats">
                <TitlePage
                text="Selecione o(s) assento(s)"
                />
                <ContainerSeats
                seats={seats.seats}
                setBuySeats={setBuySeats}
                buySeats={buySeats}
                />
                <Subtitles />
                <Inputs
                setBuyerData={setBuyerData}
                buyerData={buyerData}
                />
                <Button
                buyer={buyer}
                bool={true}
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