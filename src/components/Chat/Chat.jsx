import "./index.css";
import { CameraIcon } from "../icons";

const Chat = ({ data }) => {
  return (
    <div className="Chat">
      <div className="Chat__userImg">
        <div className="Chat__userImg--border">
          <img src={data.userImg} alt={data.username} />
        </div>
      </div>
      <div className="Chat__textContent">
        <div className="Chat__textContent--content">
          <div className="Chat__textContent--username">{data.username}</div>
          <div className="Chat__textContent--message">
            {data.messages[data.messages.length - 1].content}
          </div>
        </div>
        <div className="Chat__textContent--time">
          {data.last_message_timestamp}
        </div>
      </div>
      <div className="Chat__camera">
        <CameraIcon fill="#00000066"></CameraIcon>
      </div>
    </div>
  );
};

export default Chat;
