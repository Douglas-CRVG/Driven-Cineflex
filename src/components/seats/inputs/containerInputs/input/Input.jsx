import "./input.css";
export default function Input({text}){
    return(
        <input
        type="text"
        placeholder={`Digite seu ${text}...`}
        />
    )
}