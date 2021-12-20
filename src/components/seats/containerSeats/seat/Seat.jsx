import { useState } from "react";
import "./seat.css";
export default function Seat({
    id,
    isAvailable,
    name
}){
    const [select, setSelect] = useState("available");

    function selectSeat(){
        if (isAvailable){
            if(select === "available"){
                setSelect("selected");
            } else {
                setSelect("available");
            }
        }
    }
    return(
        <>
            <button onClick={()=>selectSeat()} className={isAvailable ? select : "unavailable"}>{name}</button>
        </>
    );
}