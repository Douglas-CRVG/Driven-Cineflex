import { Link } from "react-router-dom"
import "./movie.css"

export default function Movie({id, overview, posterURL}) {
    return(
        <>
            <Link to={`/sessoes/${id}`}>
                <div className="movie">
                    <img src={posterURL} alt={overview} />
                </div>
            </Link>
        </>
    )
}