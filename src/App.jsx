import { useState } from "react";
import "./App.css";
import { storiesData } from "./mocks/storiesData";
import { userData } from "./mocks/userData";
import { postsData } from "./mocks/postsData";
import Topbar from "./components/Topbar";
import Stories from "./components/Stories";
import Posts from "./components/Posts/Posts";
import TabBar from "./components/TabBar/TabBar";

function App() {
  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState(postsData);

  return (
    <>
      <Topbar></Topbar>
      <Stories user={user} stories={stories}></Stories>
      <Posts posts={posts}></Posts>
      <TabBar user={user}></TabBar>
    </>
  );
}

export default App;
