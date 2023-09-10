import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../component/movielist/MovieList";
// import axios from 'axios'
const Home = () => {
  const [popularmovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=03c1a53f211e58318f6b965e19432775"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setPopularMovies(data.results);
      });
  }, []);
  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={2}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularmovies.map((movie) => {
            return (
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/movie/${movie.id}`}
              >
                <div className="posterImage">
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      movie && movie.backdrop_path
                    }`}
                    alt=""
                  />
                </div>
                <div className="posterImage_overlay">
                  <div className="posterImage_title">
                    {movie ? movie.original_title : ""}
                  </div>
                 
                </div>
              </Link>
            );
          })}
        </Carousel>
        <MovieList/>
      </div>
    </>
  );
};

export default Home;
