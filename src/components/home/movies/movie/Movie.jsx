import { Link } from "react-router-dom"
import "./movie.css"

export default function Movie({idMovie}){

    return(
        <>
            <Link to={`/sessoes/:${idMovie}`}>
                <div className="movie">
                    <img src="" alt="" />
                </div>
            </Link>
            <Link to={`/sessoes/:${idMovie}`}>
                <div className="movie">
                    <img src="" alt="" />
                </div>
            </Link>
            <Link to={`/sessoes/:${idMovie}`}>
                <div className="movie">
                    <img src="" alt="" />
                </div>
            </Link>
            <Link to={`/sessoes/:${idMovie}`}>
                <div className="movie">
                    <img src="" alt="" />
                </div>
            </Link>
            <Link to={`/sessoes/:${idMovie}`}>
                <div className="movie">
                    <img src="" alt="" />
                </div>
            </Link>
            <Link to={`/sessoes/:${idMovie}`}>
                <div className="movie">
                    <img src="" alt="" />
                </div>
            </Link>
            <Link to={`/sessoes/:${idMovie}`}>
                <div className="movie">
                    <img src="" alt="" />
                </div>
            </Link>
            <Link to={`/sessoes/:${idMovie}`}>
                <div className="movie">
                    <img src="" alt="" />
                </div>
            </Link>
            <Link to={`/sessoes/:${idMovie}`}>
                <div className="movie">
                    <img src="" alt="" />
                </div>
            </Link>
            <Link to={`/sessoes/:${idMovie}`}>
                <div className="movie">
                    <img src="" alt="" />
                </div>
            </Link>
        </>
    )
}