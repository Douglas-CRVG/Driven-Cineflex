export default function Ticket({buySeats}){
    return(
        <div>
            <h1>Ingressos</h1>
            {buySeats.map((seat, index) => <p key={index}>Assento {seat.name}</p>)}
        </div>
    );
}