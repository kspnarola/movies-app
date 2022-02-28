import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import MoviesList from '../components/MoviesList'
import { MOVIES_LIST_DATA } from '../mockData/mockData'
import MoviesData from '../mockData/data.json'
import FilterBox from '../components/FilterBox'

export default function Home() {
  const [searchMovie, setSearchMovie] = useState("")
  const [movies, setMovies] = useState(MoviesData.movies)

  useEffect(() => {
    if (searchMovie) {
      const filteredMovies = MoviesData.movies.filter(movie => movie.title.toLowerCase().includes(searchMovie.toLowerCase()));
      setMovies(filteredMovies);
    }
  }, [searchMovie])


  return (
    <Container className="home-page">
      <FilterBox searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
      <MoviesList movies={movies} />
    </Container>
  )
}
