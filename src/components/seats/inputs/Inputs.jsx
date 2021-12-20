import "./inputs.css";
import ContainerInputs from "./containerInputs/ContainerInputs";

export default function Inputs({setBuyerData, buyerData}) {
    return(
        <div className="inputs">
            {["Nome","CPF"].map((iten, index)=>(
                <ContainerInputs
                key={index}
                text={iten}
                setBuyerData={setBuyerData}
                buyerData={buyerData}
                />))}
        </div>
    );
}