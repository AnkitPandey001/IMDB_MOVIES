import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './component/header/Header';
import Home from './page/home/Home';
import MovieList from './component/movielist/MovieList';
import Movies from './page/home/movie/Movies';
function App() {
  return (
    <div className="App">
        <Router>
        <Header/>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="movie/:id" element={<Movies/>}></Route>
             <Route path="movies/:type" element={<MovieList />}></Route>
            <Route path="/*" element={<h1>Error Pages</h1>}></Route>
          </Routes>
        </Router>
        
    </div>
  );
}

export default App;
