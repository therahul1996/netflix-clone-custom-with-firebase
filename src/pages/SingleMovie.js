import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import PageNotFound from '../pages/PageNotFound'
import moviesData from '../components/movieList/moviesData.json'
// import PopularMovies from '../components/movieList/PopularMovies';
import PopupModal from '../components/modal/PopupModal'
import Loader from '../components/loader/Loader'
import { MdOutlineSlowMotionVideo } from "react-icons/md";
const SingleMovie = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (youtubeId) => {
    setSelectedVideo(youtubeId);
  };

  const handleClosePopup = () => {
    setSelectedVideo(null);
  };
  const { id } = useParams();
  // const movie = moviesData.find((movie) => movie.id === id)
  const movie = moviesData.find((movie) => movie.id === parseInt(id));
  const otherMovies = moviesData.filter(movie => movie.id !== id)
  if (!movie) return <Loader />

  return (
    <>
      <section className='single-movie-sec'>
        <div className='single-card' style={{ backgroundImage: `url(${movie.backdrop_path})` }}>
          <div className='single-card-content'>
            <h3>{movie.title}</h3>
            <p>{movie.desc}</p>
            <button className='btn btn-outline-white' onClick={() => handleVideoClick(movie.youtubeId)}><MdOutlineSlowMotionVideo />Watch Now</button>
          </div>
        </div>
      </section>
      {selectedVideo && <PopupModal youtubeId={selectedVideo} onClose={handleClosePopup} />}

      <div className='container'>
        <div className='movieList mt-15'>
          <h1 className='movie-heading'>Polpular Movies</h1>
          <ul>
            {otherMovies.map((movie) => (
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
      </div>
    </>
  )
}

export default SingleMovie