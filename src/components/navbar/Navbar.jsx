import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useLocation,useNavigate } from 'react-router-dom'


//components

//styles
import './navbar.css'

//API

function Navbar(props) {

  const [searchTerm, setSearchTerm] = useState("")

  const location = useLocation()
  const navigate = useNavigate()

  const handleOnSubmit = (e) => {
    props.onSubmit(searchTerm)
    e.preventDefault()

  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className='navbar-container'>
        <div className="navbar">
              <Link className="logo" to='/list'>
                FakeFlix <FontAwesomeIcon icon={faBed}/>
              </Link>    
        <div className="search-form">
            <form onSubmit={handleOnSubmit} action="search">
            <FontAwesomeIcon className='search' icon={faMagnifyingGlass}/>
                <input 
                  className='search-input' 
                  type="text" 
                  placeholder='  Hľadaj film'
                  value={searchTerm}
                  onChange={handleOnChange}
                  />
            </form>
        </div>
        </div>
        
    </div>
  )
}

export default Navbar