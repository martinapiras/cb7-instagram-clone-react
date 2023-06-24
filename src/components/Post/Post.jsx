import {
  LikeIcon,
  MessengerIcon,
  MoreIcon,
  SaveIcon,
  CommentIcon,
  VerifiedIcon,
  LikeIconActive,
  SavedPostIcon,
} from "../icons";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import { Pagination } from "swiper";

const Post = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const [isSaved, setIsSaved] = useState(false);
  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <article className="Post">
      <div className="Post__Top">
        <div className="Post__Top-userInfo">
          <img src={data.userImg} alt={data.username} />
          <div className="userInfo__text">
            <div className="username">
              {data.username}
              {data.isVerified && <VerifiedIcon />}
            </div>
            <p className="location">{data.location}</p>
          </div>
        </div>
        <div className="Post__Top-more">
          <MoreIcon />
        </div>
      </div>
      <div className="Post__Content">
        <Swiper pagination={{ dynamicBullets: true }} modules={[Pagination]}>
          {data?.media.map((img) => (
            <SwiperSlide key={img.id}>
              <img src={img.src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="Post__Bottom">
        <div className="Post__BottomBar">
          <div className="BottomBar__reactions">
            <div className="BottomBar__reactions--like" onClick={toggleLike}>
              {isLiked ? (
                <LikeIconActive></LikeIconActive>
              ) : (
                <LikeIcon></LikeIcon>
              )}
            </div>
            <div className="BottomBar__reactions--comments">
              <CommentIcon></CommentIcon>
            </div>
            <div className="BottomBar__reactions--messenger">
              <MessengerIcon></MessengerIcon>
            </div>
          </div>
          <div className="BottomBar__bookmark">
            <div className="BottomBar__bookmark--icon" onClick={toggleSave}>
              {isSaved ? (
                <SavedPostIcon></SavedPostIcon>
              ) : (
                <SaveIcon></SaveIcon>
              )}
            </div>
          </div>
        </div>
        <p className="Post__Bottom-likes">
          Liked by{" "}
          {isLiked ? (
            <span>you</span>
          ) : (
            <span>{data.likes.featuredLike.username}</span>
          )}{" "}
          and{" "}
          {isLiked ? (
            <span>{data.likes.likesNumber + 1}</span>
          ) : (
            <span>{data.likes.likesNumber}</span>
          )}
          <span> others</span>
        </p>
        <p className="Post__Bottom-description">
          <span>{data.username} </span>
          <span>{data.description}</span>
        </p>
      </div>
    </article>
  );
};

export default Post;
