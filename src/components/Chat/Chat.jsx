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
          <div className="Chat__textContent--message">{data.message}</div>
        </div>
        <div className="Chat__textContent--time">now</div>
      </div>
      <div className="Chat__camera">
        <CameraIcon></CameraIcon>
      </div>
    </div>
  );
};

export default Chat;
