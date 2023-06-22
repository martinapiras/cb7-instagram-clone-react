import "./index.css";
import { CameraIcon } from "../icons";

const ChatList = ({ data, setChatName }) => {
  return (
    <div className="ChatList" onClick={() => setChatName(data.username)}>
      <div className="ChatList__userImg">
        <div className="ChatList__userImg--border">
          <img src={data.userImg} alt={data.username} />
        </div>
      </div>
      <div className="ChatList__textContent">
        <div className="ChatList__textContent--content">
          <div className="ChatList__textContent--username">{data.username}</div>
          <div className="ChatList__textContent--message">
            {data.messages[data.messages.length - 1].content}
          </div>
        </div>
        <div className="ChatList__textContent--time">
          {data.last_message_timestamp}
        </div>
      </div>
      <div className="ChatList__camera">
        <CameraIcon fill="#00000066"></CameraIcon>
      </div>
    </div>
  );
};

export default ChatList;
