import React, { forwardRef } from "react";

import TextTruncate from "react-text-truncate";

import ThumbUpAltSharpIcon from "@material-ui/icons/ThumbUpAltSharp";

import "./video-card.style.css";

const base_url = "https://image.tmdb.org/t/p/original";
const defaultImg =
  "https://assetshuluimcom-a.akamaihd.net/h3o/facebook_share_thumb_default_hulu.jpg";

const VideoCard = forwardRef(
  (
    {
      original_name,
      backdrop_path,
      title,
      overview,
      poster_path,
      release_date,
      first_air_date,
      vote_count,
      media_type,
    },
    ref
  ) => {
    const url =
      backdrop_path !== (undefined || null)
        ? `${base_url}${backdrop_path}` || `${base_url}${poster_path}`
        : `${defaultImg}`;
    return (
      <div ref={ref} className="videoCard">
        <img
          src={url ? url : defaultImg}
          alt={`${title || original_name}'s Logo`}
        />
        <TextTruncate line={1} element="p" truncateText="..." text={overview} />
        <h3>{title || original_name}</h3>
        <p className="videoCard__stats">
          {media_type && `${media_type} •  `}
          {release_date || first_air_date} • {"  "}
          <ThumbUpAltSharpIcon />
          {vote_count}
        </p>
      </div>
    );
  }
);

export default VideoCard;
