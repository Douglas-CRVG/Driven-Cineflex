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
    console.log(buySeats)

    function selectSeat(){
        if (isAvailable){
            if(select === "available"){
                setSelect("selected");
                buySeats=[...buySeats, name];
            } else {
                setSelect("available");
                buySeats = [...buySeats.filter(item=>item!=name)]
            }
            //setBuyer({...buyerClone})
            setBuySeats(...buySeats);
        }
    }

    /*if(!arr1.includes(name)){
        arr2 = [...arr1, name];
    } else {
        arr2 = [...arr1.filter(item=>item!=name)]
    }*/
    return(
        <>
            <button onClick={()=>selectSeat()} className={isAvailable ? select : "unavailable"}>{name}</button>
        </>
    );
}