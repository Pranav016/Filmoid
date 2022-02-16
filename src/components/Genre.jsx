import React, { useEffect } from "react";
import { Chip } from "@mui/material";

const Genre = ({
  type,
  selectedGenre,
  genres,
  setSelectedGenre,
  setGenres,
  setPage,
}) => {
  let { VITE_API_KEY } = import.meta.env;
  const fetchGenres = async () => {
    let data = await fetch(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${VITE_API_KEY}&language=en-US`
    );
    let obj = await data.json();
    setGenres(obj.genres);
  };
  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres([]);
    };
  }, []);
  const handleAdd = (genre) => {
    setSelectedGenre((prevSelectedGenres) => [...prevSelectedGenres, genre]);
    setGenres((prevGenres) => prevGenres.filter((g) => g.id !== genre.id));
    setPage(1);
  };
  const handleDelete = (genre) => {
    setSelectedGenre((prevSelectedGenres) =>
      prevSelectedGenres.filter((g) => g.id !== genre.id)
    );
    setGenres((prevGenres) => [...prevGenres, genre]);
    setPage(1);
  };

  return (
    <div style={{ padding: "6px 2px" }}>
      {selectedGenre &&
        selectedGenre.map((genre) => {
          return (
            <Chip
              key={genre.id}
              label={genre.name}
              clickable
              color="primary"
              onDelete={() => handleDelete(genre)}
            />
          );
        })}
      {genres &&
        genres.map((genre) => {
          return (
            <Chip
              key={genre.id}
              label={genre.name}
              clickable
              variant="outlined"
              onClick={() => handleAdd(genre)}
            />
          );
        })}
    </div>
  );
};

export default Genre;
