import "./index.css";
import {
  BackIcon,
  DownArrowIcon,
  PlusIcon,
  SearchIcon,
  CameraIcon,
} from "../icons";
import Chat from "../Chat";

const Messenger = ({ user, setSection, stories }) => {
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
          <SearchIcon fill="#3c3c4399"></SearchIcon>
        </div>
        <input type="text" placeholder="Search" />
      </div>
      {stories.map((story) => (
        <Chat data={story} key={story.id}></Chat>
      ))}
      <div className="Messenger__camera">
        <CameraIcon></CameraIcon>
        <p>Camera</p>
      </div>
    </div>
  );
};

export default Messenger;
