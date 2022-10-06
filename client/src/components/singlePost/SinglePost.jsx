import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost()
{
  const location = useLocation()
  const path = location.pathname.split('/')[2];

  const [post, setPost] = useState({})

  useEffect(() =>
  {
    const getPost = async () =>
    {
      const res = await axios.get("/posts/" + path);
      setPost(res.data)
    }
    getPost()

  }, [path])

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Safak
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}
