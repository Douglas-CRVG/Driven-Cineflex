import "./finish.css"
import TitlePage from "../others/titlePage/TitlePage";
import Button from "../others/button/Button";
import { Link } from "react-router-dom";

export default function Finish() {
    return(
        <main>
            <TitlePage text="Pedido feito com sucesso!" />
            <div className="data">
                <div>
                    <h1>Filme e sessão</h1>
                    <p>Filme</p>
                    <p>data - hora</p>
                </div>
                <div>
                    <h1>Ingressos</h1>
                    <p>Assento x</p>
                    <p>Assento y</p>
                </div>
                <div>
                    <h1>Comprador</h1>
                    <p>Nome: João Driven</p>
                    <p>CPF: 000.000.000-00</p>
                </div>
            </div>
            <Link to="/">
                <Button text="Voltar pra Home"/>
            </Link>
        </main>
    );
}