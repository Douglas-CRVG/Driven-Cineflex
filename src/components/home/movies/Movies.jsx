import { useEffect, useState } from "react";
import { getMovies } from "../../others/Axios";
import Movie from "./movie/Movie";
import "./movies.css"

export default function Movies() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        getMovies().then((response)=> setData(response.data));
    },[]);

    return(
        <div className="container">
            {data.map(({id, overview, posterURL}, index)=><Movie key={index} id={id} overview={overview} posterURL={posterURL}/>)}
        </div>
    );
}