import React from 'react'
import {Link} from 'react-router-dom'


//styles
import './error.css'


//components
import Navbar from '../../components/navbar/Navbar'


function Error() {
  return (
    <div className='error-container'>
        <Navbar/>
        <div className="error-massage">
              <h2>Error 404</h2>
        <p>Stránka nenájdená</p>
        <img src="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg" alt="grumpy_cat" />
        <Link to='/'>Návrat na domovskú stránku</Link>
        </div>
      
    </div>
  )
}

export default Error