import "./index.css";
import Story from "../Story/";

const Stories = ({ user, stories }) => {
  return (
    <ul className="Stories">
      <Story data={user}></Story>
      {stories &&
        stories.map((story) => <Story data={story} key={story.id}></Story>)}
    </ul>
  );
};

export default Stories;
