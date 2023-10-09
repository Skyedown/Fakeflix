import React, {useState, useEffect} from 'react'

import Movie from '../movie/Movie'

import './trendingMovies.css'


const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7a4e7f23596217345f8eec19e3cb44f8'

function TrendingMovies() {

    const [movies, setMovies] = useState([])

    useEffect(() =>{
          
            fetch(FEATURED_API)
              .then((res)=>res.json())
              .then((data)=>{
                setMovies(data.results)
              })
                   },[]);                     
  return (
    <div className="trending-movies-container">
        <h2 className='trending-hdl'>Práve vyšlo</h2>
         <div className="featured-movies-container">
        {movies.length > 0 && movies.map((movie)=>
        <Movie key={movie.id} {...movie}/>)}
         </div>
  </div>
    )
}

export default TrendingMovies