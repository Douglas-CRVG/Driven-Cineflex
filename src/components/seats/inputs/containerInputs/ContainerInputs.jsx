import "./containerInputs.css";
import Input from "./input/Input";

export default function ContainerInputs({
    text,
    setBuyerData,
    buyerData
}){
    return(
        <div className="container-inputs">
            <p>{text} do comprador:</p>
            <Input
            text={text}
            setBuyerData={setBuyerData}
            buyerData={buyerData}
            />
        </div>
    );
}