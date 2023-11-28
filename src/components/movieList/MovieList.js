import React from 'react'
// import TrendingMovies from './TrendingMovies'
import PopularMovies from './PopularMovies'
import './style.css'
// https://api.themoviedb.org/3/trending/all/day?api_key=process.env.REACT_APP_THE_MOVIE_DB
const MovieList = () => {

  return (
    <section className='movie-list-sec'>
      <div className='container mb-50'>
        <PopularMovies />
      </div>
    </section>
  )
}

export default MovieList