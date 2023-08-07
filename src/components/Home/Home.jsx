import React, { useEffect} from 'react'
import { useDispatch } from "react-redux"
import MovieListing from "../MovieListing/MovieListing"
import {  fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'



const Home = () => {

  const dispatch = useDispatch()
 
  useEffect(() => {
    
      dispatch(fetchAsyncShows('Friends'))
      dispatch (fetchAsyncMovies('Harry'))
      
      
  },[dispatch])

  

  return(
   <>
      
     <MovieListing/>
     </>
  )
}

export default Home