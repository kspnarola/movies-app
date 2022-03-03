import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import MoviesList from '../components/MoviesList'
import { MOVIES_LIST_DATA } from '../mockData/mockData'
import FilterBox from '../components/FilterBox'
import Head from 'next/head'

export default function Home() {
  const [searchMovie, setSearchMovie] = useState("")
  const [movies, setMovies] = useState(MOVIES_LIST_DATA)

  useEffect(() => {
    if (searchMovie) {
      const filteredMovies = MOVIES_LIST_DATA.filter(movie => movie.title.toLowerCase().includes(searchMovie.toLowerCase()));
      setMovies(filteredMovies);
    } else {
      setMovies(MOVIES_LIST_DATA);
    }
  }, [searchMovie])


  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@atlaskit/css-reset@2.0.0/dist/bundle.css"
          media="all"
        />
        <script src="https://connect-cdn.atl-paas.net/all.js" async></script>
      </Head>
      <Container className="home-page">
        <FilterBox searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
        <MoviesList movies={movies} />
      </Container>
    </>
  )
}
