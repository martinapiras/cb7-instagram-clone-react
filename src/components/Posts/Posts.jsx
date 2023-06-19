import "./index.css";
import Post from "../Post";

const Posts = ({ posts }) => {
  return (
    <div className="Posts">
      {posts.map((post) => (
        <Post data={post} key={post.id}></Post>
      ))}
    </div>
  );
};

export default Posts;
