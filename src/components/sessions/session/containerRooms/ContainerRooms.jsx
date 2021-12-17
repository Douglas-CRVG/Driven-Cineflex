import "./containerRooms.css";
import Button from "../../../others/button/Button";
import { Link } from "react-router-dom";

export default function ContainerRooms({showtimes}){
    return(
        <div className="container-rooms">
            {showtimes.map(({id, name}, index) =>{
                return (
                    <Link to={`/assentos/${id}`}> 
                        <Button key={index} text={name} />
                    </Link>
                );
            })}
        </div>
    );
}