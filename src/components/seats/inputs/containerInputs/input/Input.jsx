import { useState } from "react";
import "./input.css";
export default function Input({
    text,
    setBuyerData,
    buyerData
}){
    const [input, setInput] =useState("");
    function getInput(value){
        setInput(value);
        if(text === "Nome"){
            buyerData = {
                ...buyerData,
                name: value
            }
        } else{
            buyerData = {
                ...buyerData,
                cpf: value
            }
        }
        setBuyerData({...buyerData})
    }

    return(
        <input
        type="text"
        onChange = {(e)=>getInput(e.target.value)}
        placeholder={`Digite seu ${text}...`}
        value={input}
        />
    )
}