import React from 'react';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../firebase';
import NewRelease from '../components/newRelease/NewRelease'
import MovieList from '../components/movieList/MovieList'
// https://api.themoviedb.org/3/trending/all/day?api_key=3c329898c4eabee70083c109dbc93ba6
const Movie = () => {
// const [authUser, setAuthUser] = useState(null)
// useEffect(()=> {

// },[])
  return (
    <>
      <NewRelease />
      <MovieList />
    </>
  )
}

export default Movie