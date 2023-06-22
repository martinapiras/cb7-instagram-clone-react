import { useState, useEffect, useRef } from "react";
import { filtersData } from "../../mocks/filters";
import "./index.css";

const Camera = () => {
  const [constraints, setConstraints] = useState({
    audio: false,
    video: { width: 396, height: 1080 },
  });

  // WIP //
  const [filterState, setFilterState] = useState("");

  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play();
        };
      })
      .catch((err) => {
        console.error(`${err.name}: ${err.message}`);
      });
  }, []);

  const onSetFilterState = () => {
    setFilterState(filterState);
  };

  return (
    <>
      <video ref={videoRef} className={`Camera ${filterState}`}></video>
      {/* <div className="Camera__filters">
        <ul>
          {filtersData?.map((filter) => (
            <li
              className={filter.name}
              onClick={() => onSetFilterState(filter.name)}
            >
              {filter.name}
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
};

export default Camera;
