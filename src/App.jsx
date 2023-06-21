import { useState, useEffect } from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import TabBar from "./components/TabBar";
import Camera from "./components/Camera";
import Messenger from "./components/Messenger";

function App() {
  const [user, setUser] = useState({});
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [section, setSection] = useState("home");

  // USER DATA
  useEffect(() => {
    fetch("https://api.npoint.io/03d220efc95662e81cc6")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  // STORIES DATA
  useEffect(() => {
    fetch("https://api.npoint.io/580adfbbde89108c8ab7")
      .then((res) => res.json())
      .then((data) => {
        setStories(data);
        console.log(data);
      });
  }, []);

  // POSTS DATA
  useEffect(() => {
    fetch("https://api.npoint.io/576f295cb0c89a62dee5")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const onSectionRender = () => {
    switch (section) {
      case "home":
        return (
          <>
            <Topbar setSection={setSection}></Topbar>
            <Stories user={user} stories={stories}></Stories>
            <Posts posts={posts}></Posts>
            <TabBar user={user} setSection={setSection}></TabBar>
          </>
        );
      case "camera":
        return (
          <>
            <Topbar setSection={setSection}></Topbar>
            <Camera></Camera>;
          </>
        );

      case "igtv":
        return (
          <>
            <Topbar setSection={setSection}></Topbar>
            <h1>IGTV</h1>
          </>
        );

      case "msg":
        return (
          <Messenger user={user} setSection={setSection} stories={stories} />
        );

      case "search":
        return (
          <>
            <h1>SEARCH</h1>
            <TabBar user={user} setSection={setSection}></TabBar>
          </>
        );

      case "new":
        return (
          <>
            <h1>NEW POST</h1>
            <TabBar user={user} setSection={setSection}></TabBar>
          </>
        );

      case "notifs":
        return (
          <>
            <h1>NOTIFICATIONS</h1>
            <TabBar user={user} setSection={setSection}></TabBar>
          </>
        );

      case "profile":
        return (
          <>
            <h1>YOUR PROFILE</h1>
            <TabBar user={user} setSection={setSection}></TabBar>
          </>
        );
    }
  };

  return <>{onSectionRender()}</>;
}

export default App;
