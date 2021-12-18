import "./containerInputs.css";
import Input from "./input/Input";

export default function ContainerInputs({text}){
    return(
        <div className="container-inputs">
            <p>{text} do comprador:</p>
            <Input text={text} />
        </div>
    );
}