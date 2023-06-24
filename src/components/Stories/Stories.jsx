import "./index.css";
import Story from "../Story/";
import { useState, useEffect } from "react";
import StoryModal from "../StoryModal";

const Stories = ({ user, stories }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startingStory, setStartingStory] = useState(false);

  const openStoryModal = (index) => {
    setStartingStory(index);
    setIsModalOpen(true);
  };

  useEffect(
    (startingStory) => {
      setStartingStory(startingStory !== false ? startingStory : false);
    },
    [startingStory]
  );

  const closeStoryModal = () => {
    setStartingStory(false);
    setIsModalOpen(false);
  };

  return (
    <ul className="Stories">
      <Story data={user}></Story>
      {stories &&
        stories.map((story, index) => (
          <Story
            data={story}
            key={story.id}
            index={index}
            openStoryModal={openStoryModal}
          ></Story>
        ))}
      {startingStory !== false && (
        <StoryModal
          stories={stories}
          isOpen={isModalOpen}
          closeStoryModal={closeStoryModal}
          index={startingStory}
        ></StoryModal>
      )}
    </ul>
  );
};

export default Stories;
