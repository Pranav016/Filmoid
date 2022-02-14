import React, { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";

const Series = () => {
  const [trending, setTrending] = useState([]);
  const fetchTrending = async () => {
    let { VITE_API_KEY } = import.meta.env;
    let data = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${VITE_API_KEY}`
    );
    let obj = await data.json();
    setTrending(obj.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);
  return (
    <div>
      <span className="pageTitle">Trending</span>
      {trending &&
        trending.map((item) => {
          <SingleContent
            key={item.id}
            id={item.id}
            poster={item.poster_path}
            title={item.title || item.name}
            date={item.first_air_date || item.release_date}
            media_type={item.media_type}
            vote_average={item.vote_average}
          />;
        })}
    </div>
  );
};

export default Series;
