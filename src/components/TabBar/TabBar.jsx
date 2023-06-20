import { HomeIcon, LikeIcon, NewPostIcon, SearchIcon } from "../icons";
import "./index.css";

const TabBar = ({ user, setSection }) => {
  return (
    <div className="TabBar">
      <div className="tab" onClick={() => setSection("home")}>
        <HomeIcon></HomeIcon>
      </div>
      <div className="tab" onClick={() => setSection("search")}>
        <SearchIcon></SearchIcon>
      </div>
      <div className="tab" onClick={() => setSection("new")}>
        <NewPostIcon></NewPostIcon>
      </div>
      <div className="tab" onClick={() => setSection("notifs")}>
        <LikeIcon></LikeIcon>
      </div>
      <div className="tab" onClick={() => setSection("profile")}>
        <img src={user.userImg}></img>
      </div>
    </div>
  );
};

export default TabBar;
