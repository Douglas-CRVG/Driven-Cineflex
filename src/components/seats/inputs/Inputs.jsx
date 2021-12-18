import "./inputs.css";
import ContainerInputs from "./containerInputs/ContainerInputs";

export default function Inputs(){
    return(
        <div className="inputs">
            {["Nome","CPF"].map(iten=> <ContainerInputs text={iten}/>)}
        </div>
    );
}