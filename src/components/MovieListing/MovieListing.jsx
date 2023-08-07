import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from "../MovieCard/MovieCard"
import "./MovieListing.scss"
import Slider from "react-slick";
import { settings } from '../../common/settings';


const MovieListing = () => {
  const movies = useSelector((state) => state.app.movies.Search)
  const shows = useSelector((state) => state.app.shows.Search)
  


  return (
    <>
      <h2 className='moviestitle'>Movies</h2>
      
      <div className="container-home">
      <Slider {...settings}>
        {movies && movies.map((movie, index) => (
         <MovieCard data={movie} key={index} />
        ))} 
        </Slider>
      </div>
      

      <h2 className='moviestitle'>Shows</h2>

      <div className="container-home1">
        <Slider {...settings}>
        {shows && shows.map((movie, index) => (
         <MovieCard data={movie} key={index} /> 
        ))}
        </Slider>
      </div>


    </>
  )

}

export default MovieListing