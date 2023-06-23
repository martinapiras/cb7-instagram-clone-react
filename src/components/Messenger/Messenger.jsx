import "./index.css";
import {
  BackIcon,
  DownArrowIcon,
  PlusIcon,
  SearchIcon,
  CameraIcon,
  ColoredCameraIcon,
} from "../icons";
import ChatList from "../ChatList";
import Chat from "../Chat";
import { useState } from "react";

const Messenger = ({ user, setSection, stories }) => {
  const [chatName, setChatName] = useState("");

  const onChatRendering = () => {
    switch (chatName) {
      case "":
        return (
          <>
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
              <ChatList
                data={story}
                key={story.id}
                setChatName={setChatName}
              ></ChatList>
            ))}
            <div className="Messenger__camera">
              <ColoredCameraIcon />
              <p>Camera</p>
            </div>
          </>
        );

      case "karennne":
        return <Chat data={stories[0]} setChatName={setChatName}></Chat>;

      case "zackjohn":
        return <Chat data={stories[1]} setChatName={setChatName}></Chat>;

      case "kieron_d":
        return <Chat data={stories[2]} setChatName={setChatName}></Chat>;

      case "craig":
        return <Chat data={stories[3]} setChatName={setChatName}></Chat>;

      case "jakob":
        return <Chat data={stories[4]} setChatName={setChatName}></Chat>;

      case "juan":
        return <Chat data={stories[5]} setChatName={setChatName}></Chat>;
    }
  };

  return <div className="Messenger">{onChatRendering()}</div>;
};

export default Messenger;
