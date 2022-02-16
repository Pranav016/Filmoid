import React, { useEffect, useState } from "react";
import Genre from "../../components/Genre";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [genreforURL, setGenreforURL] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(10);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const fetchMovies = async () => {
    let { VITE_API_KEY } = import.meta.env;
    let data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${VITE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    let obj = await data.json();
    setContent(obj.results);
    setNumberOfPages(obj.totalPages);
  };

  useEffect(() => {
    fetchMovies();
  }, [page, genreforURL]);

  return (
    <div>
      <span className="pageTitle">Movies</span>
      <Genre
        type="movie"
        selectedGenre={selectedGenre}
        genres={genres}
        setSelectedGenre={setSelectedGenre}
        setGenres={setGenres}
        setPage={setPage}
        setContent={setContent}
      />
      <div className="trending">
        {content &&
          content.map((item) => {
            return (
              <SingleContent
                key={item.id}
                id={item.id}
                poster={item.poster_path}
                title={item.title || item.name}
                date={item.first_air_date || item.release_date}
                media_type={item.media_type}
                vote_average={item.vote_average}
              />
            );
          })}
      </div>
      <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
    </div>
  );
};

export default Movies;
