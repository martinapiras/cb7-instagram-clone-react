import "./index.css";
import {
  BackIcon,
  DownArrowIcon,
  PlusIcon,
  SearchIcon,
  CameraIcon,
} from "../icons";

const Messenger = ({ user, setSection }) => {
  return (
    <div className="Messenger">
      <div className="Messenger__topbar">
        <div
          className="Messenger__topbar--back"
          onClick={() => setSection("home")}
        >
          <BackIcon></BackIcon>
        </div>
        <div className="Messenger__topbar--user">
          <p>{user.username}</p>
          <DownArrowIcon></DownArrowIcon>
        </div>
        <div className="Messenger__topbar--more">
          <PlusIcon></PlusIcon>
        </div>
      </div>
      <div className="Messenger__search">
        <div className="Messenger__search--icon">
          <SearchIcon></SearchIcon>
        </div>
        <input type="text" />
      </div>
      <ul>
        MESSAGES PLACEHOLDER
        <li>placeholder</li>
        <li>placeholder</li>
        <li>placeholder</li>
      </ul>
      <div className="Messenger__camera">
        <CameraIcon></CameraIcon>
        <p>Camera</p>
      </div>
    </div>
  );
};

export default Messenger;
