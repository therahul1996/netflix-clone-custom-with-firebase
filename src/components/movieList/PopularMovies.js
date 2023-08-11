import React from 'react'
import { Link } from 'react-router-dom'
import moviesData from './moviesData.json'
const PopularMovies = () => {
    return (
        <div className='movieList mt-15'>
            <h1 className='movie-heading'>Polpular Movies</h1>
            <ul>
                {moviesData.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movie/${movie.id}`} className='card'>
                            <img src={movie.poster_path} alt={movie.title} />
                            <div className='movieDetails'>
                                <h3>{movie.title}</h3>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PopularMovies