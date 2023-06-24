import "./index.css";

const Story = ({ data, openStoryModal, index }) => {
  return (
    <li key={data.id} className="Story" onClick={() => openStoryModal(index)}>
      <div className="Story__Image">
        <div className="Story__Image-wrapper">
          <img src={data.userImg} alt={data.username} />
          {data?.isLive && <div className="Story__Live">LIVE</div>}
        </div>
      </div>
      <div className="Story__Username">
        {data?.isUser ? "Your Story" : data.username}
      </div>
    </li>
  );
};

export default Story;
