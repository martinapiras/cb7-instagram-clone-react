import "./index.css";
import { CameraIcon, LogoIcon, IGTVIcon, MessengerIcon } from "../icons";

const Topbar = () => {
  return (
    <div className="Topbar">
      <div className="Topbar__Camera">
        <CameraIcon></CameraIcon>
      </div>
      <div className="Topbar__Logo">
        <LogoIcon></LogoIcon>
      </div>
      <div className="Topbar__Actions">
        <IGTVIcon></IGTVIcon>
        <MessengerIcon></MessengerIcon>
      </div>
    </div>
  );
};

export default Topbar;
