import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <div className='header'>
      <div className='headerLeft'> 
            <Link to="/"><img className='header_icon' src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/imdb-icon.png' alt="" height="60px"/></Link>
            <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated"style={{textDecoration:"none"}} ><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
           
            <div className='input_type'>
           <input type="text" placeholder='Search Your movies'></input>
      </div>

      </div>
    </div>
  )
}

export default Header
