import React from 'react'
import {useState, useEffect} from 'react';


//components
import Navbar from '../../components/navbar/Navbar'
import TrendingMovies from '../../components/trendingMovies/TrendingMovies'
import MoviesByGenre from '../../components/moviesByGenre/MoviesByGenre'
import Footer from '../../components/footer/Footer'
import Login from '../login/Login'



//consts
const GENRES_API = 'https://api.themoviedb.org/3/genre/movie/list?api_key=7a4e7f23596217345f8eec19e3cb44f8&language=en-US'


function Home() {

    const [genres, setGenres] = useState([])

    useEffect(() =>{
            
      fetch(GENRES_API)
        .then((res)=>res.json())
        .then((data)=>{
          setGenres(data.genres)
        
        })
            },[]) 

  return (

    <div>
          
          <div className='home'>
            <Navbar />
            <TrendingMovies/>
            {genres.length > 0 && genres.map((genre)=>
            <MoviesByGenre key={genre.id} {...genre}/>)}
            <Footer/>
          </div>
    </div>
    
  )
}

export default Home

