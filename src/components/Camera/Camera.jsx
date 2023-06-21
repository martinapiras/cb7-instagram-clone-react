import { useState, useEffect } from "react";
import { filtersData } from "../../mocks/filters";
import "./index.css";

const Camera = () => {
  const [constraints, setConstraints] = useState({
    audio: false,
    video: { width: 396, height: 1080 },
  });

  // WIP //
  const [filterState, setFilterState] = useState("");

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
        const video = document.querySelector("video");

        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
          video.play();
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
      <video className={`Camera ${filterState}`}></video>
      <div className="Camera__filters">
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
      </div>
    </>
  );
};

export default Camera;
