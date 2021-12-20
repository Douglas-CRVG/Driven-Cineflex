import "./sucess.css"
import TitlePage from "../others/titlePage/TitlePage";
import Button from "../others/button/Button";
import { Link } from "react-router-dom";
import MovieSession from "./movieAndSession/MovieSession";
import Ticket from "./ticket/Ticket";
import Data from "./data/Data";

export default function Sucess({buyer}) {
    return(
        <main className="sucess">
            <TitlePage text="Pedido feito com sucesso!" />
            <div className="data">
                <MovieSession buyer={buyer}/>
                <Ticket buySeats={buyer.buySeats}/>
                <Data buyerData={buyer.buyerData}/>
            </div>
            <Link to="/">
                <Button text="Voltar pra Home"/>
            </Link>
        </main>
    );
}