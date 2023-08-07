import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from "../../images/user.png"
import "./Header.scss"
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

export const Header = () => {

  const dispatch = useDispatch()

  const [term , setTerm] = useState("")

  const handlechange = (event) =>{
    setTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchAsyncShows(term))
    dispatch(fetchAsyncMovies(term))
    setTerm("")
  }

  
  


  return (
    <div className='header'>
      <Link to="/">
        <div className="logo">Home</div>
      </Link>

    <div className="search">
      <form onSubmit={handleSubmit}> 
        <input type='text' placeholder='Search movies or shows' value= {term} onChange={handlechange}></input>
        <button type='submit'> <i className='fa fa-search'></i></button>

      </form>
    </div>

      <div className="user-image">
        <img src={user} alt='user' />
      </div>

    </div>
  )
}

export default Header