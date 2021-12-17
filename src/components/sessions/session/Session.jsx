import "./session.css";
import ContainerRooms from "./containerRooms/ContainerRooms";

export default function Session(props){
    const {
        date,
        showtimes,
        weekday
    } = props;

    return(
        <div className="session">
            <p>{`${weekday} - ${date}`}</p>
            <ContainerRooms showtimes={showtimes} />
        </div>
    );
}