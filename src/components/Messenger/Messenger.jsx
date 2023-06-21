import "./index.css";
import {
  BackIcon,
  DownArrowIcon,
  PlusIcon,
  SearchIcon,
  CameraIcon,
} from "../icons";
import Chat from "../Chat";
import { useState } from "react";

const Messenger = ({ user, setSection, stories }) => {
  const [chatName, setChatName] = useState("");

  /////////////// WIP ///////////////
  const onChatRendering = () => {
    switch (chatName) {
      case "":
        return stories.map((story) => (
          <Chat data={story} key={story.id}></Chat>
        ));

      case "karennne":
        return <h1>karennne</h1>;

      case "zackjohn":
        return <h1>zackjohn</h1>;

      case "kieron_d":
        return <h1>kieron_d</h1>;

      case "craig":
        return <h1>craig</h1>;

      case "jakob":
        return <h1>jakob</h1>;

      case "juan":
        return <h1>juan</h1>;
    }
  };

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

      {/* {stories.map((story) => (
        <Chat data={story} key={story.id}></Chat>
      ))} */}

      {onChatRendering()}

      <div className="Messenger__camera">
        <CameraIcon fill="#262626"></CameraIcon>
        <p>Camera</p>
      </div>
    </div>
  );
};

export default Messenger;
