import React from 'react'


//styles
import './moviePreview.css'

//api
const IMG_API = 'https://image.tmdb.org/t/p/w275/';


function MoviePreview({title,poster, overview, vote_average}) {
  return (
    <div className='preview'>
        <h2 className="preview-info-headline">{title}</h2>
        <p className="preview-info-description"> {overview}</p>
        <span className="preview-info-rating"></span>
        <button className="watch">Pozrieť trailer</button>
    </div>
  )
}

export default MoviePreview