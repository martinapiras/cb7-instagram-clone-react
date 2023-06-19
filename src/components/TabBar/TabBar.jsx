import { HomeIcon, LikeIcon, NewPostIcon, SearchIcon } from "../icons";
import "./index.css";

const TabBar = ({ user }) => {
  return (
    <div className="TabBar">
      <div className="tab">
        <HomeIcon></HomeIcon>
      </div>
      <div className="tab">
        <SearchIcon></SearchIcon>
      </div>
      <div className="tab">
        <NewPostIcon></NewPostIcon>
      </div>
      <div className="tab">
        <LikeIcon></LikeIcon>
      </div>
      <div className="tab">
        <img src={user.userImg}></img>
      </div>
    </div>
  );
};

export default TabBar;
