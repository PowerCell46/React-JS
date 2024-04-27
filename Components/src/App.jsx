import './App.css'
import MovieList from './components/MovieList'
import Timer from './components/Timer'

const movies = [
  {title: "The Matrix", description: 'some desc...'},
  {title: "Lotr", description: 'some desc...'},
  {title: "Harry Potter", description: 'some desc...'}
]

function App() {

  return (
    <>
     {/* <MovieList h1={"MovieList"} movies={movies}/> */}
      <Timer/>
    </>
  )
}

export default App
