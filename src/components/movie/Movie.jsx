import React,{useState} from 'react'
import {Link} from 'react-router-dom'


//components

import MoviePreview from '../moviePreview/MoviePreview'

//styles
import './movie.css'

const IMG_API = 'https://image.tmdb.org/t/p/w1280/';

function Movie({title, poster_path, id ,overview, vote_average}) {

  const [preview, setPreview] = useState(false)  

  return (
    <Link className='link' to={`/SingleMovie/${id}`} title={title} poster={poster_path} overview={overview} rating={vote_average} >

      <div onMouseEnter={()=>setPreview(true)} onMouseLeave={()=>setPreview(false)}  className='movie'>  
        <img className="movie-img" loading='lazy' width="200px" height="300px" src={IMG_API + poster_path} alt={title} /> 
        <div className="movie-info">
          <h3 className='movie-info-title'>{title}</h3>
          <span className='movie-info-rating'>{vote_average}</span>
        </div>
        {preview && <MoviePreview title={title} poster={poster_path} overview={overview} rating={vote_average} />}
      
      </div>
    </Link>
  )
}

export default Movie