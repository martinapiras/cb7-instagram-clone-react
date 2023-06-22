import "./index.css";
import {
  LikeIcon,
  MessengerIcon,
  MoreIcon,
  SaveIcon,
  CommentIcon,
  VerifiedIcon,
} from "../icons";
import { useRef } from "react";

const Post = ({ data }) => {
  const likeRef = useRef(null);

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
        <img src={data.media[0].src} alt="" />
      </div>
      <div className="Post__Bottom">
        <div className="Post__BottomBar">
          <div className="BottomBar__reactions">
            <div className="BottomBar__reactions--like">
              <LikeIcon></LikeIcon>
            </div>
            <div className="BottomBar__reactions--comments">
              <CommentIcon></CommentIcon>
            </div>
            <div className="BottomBar__reactions--messenger">
              <MessengerIcon></MessengerIcon>
            </div>
          </div>
          <div className="BottomBar__bookmark">
            <div className="BottomBar__bookmark--icon">
              <SaveIcon></SaveIcon>
            </div>
          </div>
        </div>
        <p className="Post__Bottom-likes">
          Liked by <span>{data.likes.featuredLike.username}</span> and{" "}
          <span>{data.likes.likesNumber} others</span>
        </p>
        <p className="Post__Bottom-description" ref={likeRef}>
          <span>{data.username} </span>
          <span>{data.description}</span>
        </p>
        {/* <button onClick={() => console.log(likeRef.current)}>cliccami</button> */}
      </div>
    </article>
  );
};

export default Post;
