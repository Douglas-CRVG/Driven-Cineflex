import "./containerSeats.css"
import Seat from "./seat/Seat";

export default function ContainerSeats({
    seats,
    setBuySeats,
    buySeats
}) {
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
                    key={index}
                    id={id}
                    isAvailable={isAvailable}
                    name={name}
                    setBuySeats={setBuySeats}
                    buySeats={buySeats}
                    />
                );
            })}
        </div>
    );
}