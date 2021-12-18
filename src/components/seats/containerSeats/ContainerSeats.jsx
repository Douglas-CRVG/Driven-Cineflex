import { useState } from "react";
import "./containerSeats.css"
import Seat from "./seat/Seat";

export default function ContainerSeats({seats, buyerClone, setBuyer}) {
    const [buySeats, setBuySeats] = useState([])
    return(
        <div className="container-seats">
            {seats.map((seat, index) =>{
                const {
                    id,
                    isAvailable,
                    name
                } = seat;
                return(
                    <Seat
                    setBuySeats={setBuySeats}
                    buySeats={buySeats}
                    id={id}
                    isAvailable={isAvailable}
                    name={name} />
                );
            })}
        </div>
    );
}