import React, { useEffect, useState } from "react";
import Genre from "../../components/Genre";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import useGenre from "../../hooks/useGenre";

const Series = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(10);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const genreforURL = useGenre(selectedGenre);
  const fetchMovies = async () => {
    let { VITE_API_KEY } = import.meta.env;
    let data = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${VITE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    let obj = await data.json();
    setContent(obj.results);
    setNumberOfPages(obj.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, [page, genreforURL]);
  return (
    <div>
      <span className="pageTitle">Series</span>
      <Genre
        type="tv"
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
      {numberOfPages > 1 && (
        <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
      )}
    </div>
  );
};

export default Series;
