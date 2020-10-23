import Axios from "axios";
import React, { useState, useEffect } from "react";

import VideoCard from "../video-card/VideoCard";

import axios from "../../axios";

import FlipMove from "react-flip-move";

import "./movie-list.style.css";

const MovieList = ({ selectedOptions }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const req = await axios.get(selectedOptions);
      setMovies(req.data.results);
      return req;
    };
    FetchData();
  }, [selectedOptions]);

  return (
    <div className="movieList">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} {...movie} />
        ))}
      </FlipMove>
    </div>
  );
};

export default MovieList;
