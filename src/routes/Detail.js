import React from "react";
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom";

function Detail () {
  const {id} = useParams();
  const [movie,setMovie] = useState([]);
  const getMovie = async () => {
    const json = await ( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
  }
 
  useEffect(() => {
   getMovie();
  },[])

  return (<div>
    <h3>{movie.title}</h3>
    <img src={movie.large_cover_image} />
    <span>{movie.description_full}</span>
  </div>)


}

export default Detail;