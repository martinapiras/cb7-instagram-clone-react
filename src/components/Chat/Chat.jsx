import "./index.css";
import { BackIcon } from "../icons";

const Chat = ({ data, setChatName }) => {
  return (
    <div className="Chat">
      <div className="Chat__topBar">
        <div className="Chat__topBar--back">
          <div onClick={() => setChatName("")}>
            <BackIcon></BackIcon>
          </div>
        </div>
        <div className="Chat__topBar--userSection">
          <div className="Chat__topBar--userImg">
            <img src={data.userImg} alt={data.username} />
          </div>
          <div className="Chat__topBar--userInfo">
            <p className="userInfo--firstName">{`${data.username
              .charAt(0)
              .toUpperCase()}${data.username.slice(1)}`}</p>
            <p className="userInfo--username">{data.username}</p>
          </div>
        </div>
        <div className="Chat__topBar--actions">Actions</div>
      </div>
      <div className="Chat__messages">
        {data.messages.map((message) => (
          <p
            className={`Chat__message ${
              message.sender !== "pikaku" ? "otherUser" : ""
            }`}
            key={message.id}
          >
            {message.content}
          </p>
        ))}
      </div>
      <form className="Chat__newMessage">
        <div className="Chat__newMessage--camera"></div>
        <input type="text" className="Chat__newMessage--input" />
        <div className="Chat__newMessage--actions"></div>
      </form>
    </div>
  );
};

export default Chat;
