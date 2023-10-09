import {useState, useEffect} from 'react'
import { Link, useParams, useNavigate} from 'react-router-dom'

//components
import Navbar from '../../components/navbar/Navbar'
import YoutubeEmbed from "../../components/youtubeEmbed/YoutubeEmbed";
import Footer from '../../components/footer/Footer'

//styles
import './singleMovie.css'

//APIs
const BASE_API = 'https://api.themoviedb.org/3/movie/'
const API_KEY = '?api_key=7a4e7f23596217345f8eec19e3cb44f8'
const VIDEO_KEY = '/videos?api_key=7a4e7f23596217345f8eec19e3cb44f8&language=en-US'

function SingleMovie() {

    const {movieId} = useParams()
    const navigate = useNavigate()

    const [movie, setMovie] = useState({})
    const [trailer, setTrailer] = useState([])
    const [key,setKey] = useState("")

    useEffect(() =>{
          
          fetch(BASE_API + movieId + API_KEY)
              .then((res)=>res.json())
              .then((data)=>{
                setMovie(data)
              })
                   },[]);     
                   
    useEffect(() =>{
          
          fetch(BASE_API + movieId + VIDEO_KEY)
              .then((res)=>res.json())
              .then((data)=>{
                setTrailer(data.results)
               
                const trailerKey =  trailer.find(video => {
                return video.name === "Official Trailer"}).key
                setKey(trailerKey)
              
              })
                    });  
    
 



    return (
    <div >
        <Navbar/>
        <YoutubeEmbed embedId={key} />
        <div className='single-movie'>
          <div className="title">
            <div className='title-container'>
              <div className="title-static">Názov filmu</div>
            </div>
            <h1 className='title-dynamic'>{movie.title}</h1> 
          </div>
          <div className="overview">
           <div className='overview-container'>
               <div className="overview-static">Popis</div>
            </div>
            <p className='overview-dynamic'>{movie.overview}</p> <div>
              
            </div>
          </div>
          <div className="footing">
            <div className='rating'>
              <div className='rating-static'>Hodnotenie divákov</div>          
              <div className="rating-dynamic">{movie.vote_average}</div>
            </div>
            
              <button onClick={()=>navigate(-1)} className='home-btn' >Návrat domov</button>
         </div>
        </div>
        <Footer/>
    </div>
  )
}

export default SingleMovie