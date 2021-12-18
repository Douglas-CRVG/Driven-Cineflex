import "./containerRooms.css";
import Button from "../../../others/button/Button";
import { Link } from "react-router-dom";

export default function ContainerRooms({showtimes}){
    return(
        <div className="container-rooms">
            {showtimes.map(({id, name}, index) =>{
                return (
                    <Link key={index} to={`/assentos/${id}`}> 
                        <Button text={name} />
                    </Link>
                );
            })}
        </div>
    );
}