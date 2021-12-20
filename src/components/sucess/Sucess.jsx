import "./sucess.css"
import TitlePage from "../others/titlePage/TitlePage";
import Button from "../others/button/Button";
import { Link } from "react-router-dom";

export default function Sucess({buyer}) {
    console.log(buyer)
    return(
        <main className="sucess">
            <TitlePage text="Pedido feito com sucesso!" />
            <div className="data">
                <div>
                    <h1>Filme e sessão</h1>
                    <p>{buyer.movie}</p>
                    <p>{buyer.session}</p>
                </div>
                <div>
                    <h1>Ingressos</h1>
                    {buyer.buySeats.map((seat, index) => <p key={index}>Assento {seat.name}</p>)}
                </div>
                <div>
                    <h1>Comprador</h1>
                    <p>Nome: {buyer.buyerData.name}</p>
                    <p>CPF: {buyer.buyerData.cpf.substring(0,3)}.{buyer.buyerData.cpf.substring(3,6)}.{buyer.buyerData.cpf.substring(6,9)}-{buyer.buyerData.cpf.substring(9,11)}</p>
                </div>
            </div>
            <Link to="/">
                <Button text="Voltar pra Home"/>
            </Link>
        </main>
    );
}