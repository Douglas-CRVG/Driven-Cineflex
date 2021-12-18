import "./containerSeats.css"
import Seat from "./seat/Seat";

export default function ContainerSeats({seats}){
    console.log(seats);
    return(
        <div className="container-seats">
            {seats.map((seat, index) =>{
                const {
                    id,
                    isAvailable,
                    name
                } = seat;
                return(
                    <Seat id={id} isAvailable={isAvailable} name={name} />
                );
            })}
        </div>
    );
}