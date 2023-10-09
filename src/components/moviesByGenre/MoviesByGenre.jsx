import  {useState, useEffect} from 'react'

import Movie from '../movie/Movie'

import './MoviesByGenre.css'



const EACH_GENRE_API = 'https://api.themoviedb.org/3/discover/movie?&api_key=7a4e7f23596217345f8eec19e3cb44f8&with_genres='


function MoviesByGenre({id, name}) {

  const [movieByGenre, setMovieByGenre] = useState([])
  useEffect(() =>{
        
          fetch(EACH_GENRE_API+id)
            .then((res)=>res.json())
            .then((data)=>{
              setMovieByGenre(data.results)
            })
                 },[]);  
                   
  return (
    <div className="genre-movies-container">
       <div className="movies-container">
       <h2 className='genres-hdl'>{name}</h2>
        <div className="featured-movies-container">
        {movieByGenre.length > 0 && movieByGenre.map((movie)=>
        <Movie key={movie.id} {...movie}/>)}        </div>
       </div>
       
    </div>
    )
}

export default MoviesByGenre