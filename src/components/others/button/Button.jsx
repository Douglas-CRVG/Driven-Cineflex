import { useNavigate } from "react-router-dom";
import "./button.css"

export default function Button({text, bool, buyer}) {
    const navigate = useNavigate();

    function validatePurchase(){
        const {
            buySeats,
            buyerData
        } = buyer;
        if((buySeats.length > 0) && (buyerData.name !== "") && (buyerData.cpf.length === 11)){
            let body = {
                ids: buySeats.map(seat=> seat.id),
                name: buyerData.name,
                cpf: buyerData.cpf
            }
            console.log(body);
            navigate("/sucesso", {replace: true})
        } else {
            alert("As informações devem ser preenchidas")
        }
    }

    function valida(){
        if (bool){
            if(text === "Reservar assento(s)"){
                validatePurchase();
            }
        }
    }
    return(
        <button className="button" onClick={valida}>
            {text}
        </button>
    );
}