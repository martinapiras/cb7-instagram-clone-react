import "./index.css";
import {
  LikeIcon,
  MessengerIcon,
  MoreIcon,
  SaveIcon,
  CommentIcon,
  VerifiedIcon,
} from "../icons";

const Post = ({ data }) => {
  console.log(data);
  return (
    <div className="Post">
      <div className="Post__Top">
        <div className="Post__Top-userInfo">
          <img src={data.userImg} alt={data.username} />
          <div className="userInfo__text">
            <div className="username">
              {data.username}
              {/* {data.isVerified && <VerifiedIcon />} */}
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
            <LikeIcon></LikeIcon>
            <CommentIcon></CommentIcon>
            <MessengerIcon></MessengerIcon>
          </div>
          <div className="BottomBar__bookmark">
            <SaveIcon></SaveIcon>
          </div>
        </div>
        <p className="Post__Bottom-likes">
          Liked by <span>{data.likes.featuredLike.username}</span> and{" "}
          <span>{data.likes.likesNumber} others</span>
        </p>
        <p className="Post__Bottom-description">
          <span>{data.username}</span> <span>{data.description}</span>
        </p>
      </div>
    </div>
  );
};

export default Post;
