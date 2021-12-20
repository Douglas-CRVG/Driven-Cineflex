import { useState } from "react";
import "./seat.css";
export default function Seat({
    id,
    isAvailable,
    name,
    setBuySeats,
    buySeats
}){
    const [select, setSelect] = useState("available");

    let selectSeats = buySeats;

    function selectSeat(){
        if (isAvailable){
            if(select === "available"){
                setSelect("selected");
                selectSeats.push({id, name})
            } else {
                setSelect("available");
                selectSeats = [...buySeats.filter((iten) => iten.id !== id)];
            }
            setBuySeats([...selectSeats.sort((a,b)=> a.name-b.name)]);
        }
    }
    return(
        <>
            <button onClick={()=>selectSeat()} className={isAvailable ? select : "unavailable"}>{name}</button>
        </>
    );
}