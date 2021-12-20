
import "./button.css"

export default function Button({
    text,
    bool,
    validatePurchase
}) {
    function validate(){
        if (bool && text === "Reservar assento(s)"){
            validatePurchase();
        }
    }
    return(
        <button className="button" onClick={validate}>
            {text}
        </button>
    );
}