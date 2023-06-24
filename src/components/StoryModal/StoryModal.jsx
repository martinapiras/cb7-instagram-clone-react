import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";

const StoryModal = ({ stories, isOpen, closeStoryModal, index }) => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    setStart(index);
  }, [index]);

  return (
    <>
      <div className={`${isOpen ? "open" : ""} StoryModal`}>
        <div className="StoryModal__close" onClick={closeStoryModal}>
          x
        </div>
        <Swiper initialSlide={index}>
          {stories?.map((userStories) => (
            <SwiperSlide>
              <div className="StoryModal__user" key={userStories.id}>
                <div className="StoryModal__user--img">
                  <img src={userStories?.userImg} alt={userStories?.username} />
                </div>
                <div className="StoryModal__user--username">
                  {userStories?.username}
                </div>
              </div>
              <Swiper
                modules={[Pagination, Navigation]}
                pagination={{
                  type: "progressbar",
                }}
                navigation={true}
              >
                {userStories?.stories?.map((story) => (
                  <SwiperSlide>
                    <div className="StoryModal__story">
                      <img
                        src={story.src}
                        alt={`story ${story.id}`}
                        key={story.id}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default StoryModal;
