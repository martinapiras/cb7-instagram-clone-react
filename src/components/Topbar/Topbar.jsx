import "./index.css";
import { CameraIcon, LogoIcon, IGTVIcon, MessengerIcon } from "../icons";

const Topbar = ({ setSection }) => {
  const onHandleClick = (sectionName) => setSection(sectionName);

  return (
    <div className="Topbar">
      <div className="Topbar__nav">
        <div className="Topbar__Camera" onClick={() => onHandleClick("camera")}>
          <CameraIcon fill="#262626"></CameraIcon>
        </div>
        <div className="Topbar__Logo" onClick={() => onHandleClick("home")}>
          <LogoIcon></LogoIcon>
        </div>
        <div className="Topbar__Actions">
          <div
            className="Topbar__Actions-IGTV"
            onClick={() => onHandleClick("igtv")}
          >
            <IGTVIcon></IGTVIcon>
          </div>
          <div
            className="Topbar__Actions-Messenger"
            onClick={() => onHandleClick("msg")}
          >
            <MessengerIcon></MessengerIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
