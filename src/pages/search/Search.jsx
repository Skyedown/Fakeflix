import React,{useState, useEffect} from 'react'


//components
import Navbar from '../../components/navbar/Navbar'
import Movie from '../../components/movie/Movie'

//styles
import './search.css'

//API
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=7a4e7f23596217345f8eec19e3cb44f8&language=en-US&query='


function Search() {
    const [querry,setQuerry]=useState("")
    const [searchResults, setSearchResults] = useState([])

    console.log(querry)
    const getQuerry = (querry) => {setQuerry(querry)}        




    useEffect(() =>{

        if (querry) { 
            fetch(SEARCH_API+querry)
            .then((res)=>res.json())
            .then((data)=>{
              setSearchResults(data.results)  
            
            },[querry]) } else {}
        
        })

       

  return (
    <div className='search'>
        <Navbar onSubmit={getQuerry} />
        <div className="search-results">
            <div className="search-results-title">Výsledky vyhľadávania pre "{querry}"</div>
            <div className="search-results-movies">
            {searchResults.length > 0 && searchResults.map((movie)=>
            <Movie key={movie.id} {...movie}/>)}
            </div>
        </div>
    </div>
  )
}

export default Search