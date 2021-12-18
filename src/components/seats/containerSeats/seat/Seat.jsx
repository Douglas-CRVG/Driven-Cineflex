import { useState } from "react";
import "./seat.css";
export default function Seat({
    id,
    isAvailable,
    name
}){
    const [select, setSelect] = useState("available");

    function selectSeat(str){
        console.log(str, isAvailable)
        if (isAvailable){
            if(select === "available"){
                setSelect("selected");
            } else {
                setSelect("available");
            }
            console.log("mudei")
        }
    }
    return(
        <>
            <button onClick={()=>selectSeat("oi")} className={isAvailable ? select : "unavailable"}>{name}</button>
        </>
    );
}