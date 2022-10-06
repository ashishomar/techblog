import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import Axios from 'axios'

export default function Homepage() {
  const location = useLocation();
  //console.log(location);

  const [posts, setPosts] = useState([])

  useEffect(() =>
  {
    const fetchPosts = async () =>
    {
      const res = await Axios.get("/posts")
      setPosts(res.data)
    }
    fetchPosts();
  },[])


  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
}
