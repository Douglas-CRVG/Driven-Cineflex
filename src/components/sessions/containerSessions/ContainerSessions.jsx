import "./containerSessions.css";
import Session from "../session/Session";

export default function ContainerSessions({days}){
    return(
        <div className="container-sessions">
            {days.map((day, index) => {
                const {
                    date,
                    showtimes,
                    weekday
                } = day;

                return (
                    <Session key={index} date={date} showtimes={showtimes} weekday={weekday} />
                );
            })}
        </div>
    );
}