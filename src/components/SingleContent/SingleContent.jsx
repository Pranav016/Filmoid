import React from "react";
import Badge from "@mui/material/Badge";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <>
      <div key={id} className="media">
        <Badge
          badgeContent={vote_average}
          color={vote_average > 6 ? "primary" : "secondary"}
        />
        <img
          className="poster"
          src={poster ? `${img_300}/${poster}` : unavailable}
        />
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type === "TV" ? "TV Series" : "Movie"}
        </span>
        <span className="subTitle">{date}</span>
      </div>
    </>
  );
};

export default SingleContent;
