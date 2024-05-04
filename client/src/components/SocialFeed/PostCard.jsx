// import React from "react";
// import Data from "./data";
// import "./card.css";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// const PostCard = () => {
//     return (
//         <div className="grid-container">
//             {Data.map(({ id, image, likecount }) => (
//                 <Card style={{ width: '18rem' }} key={id}>
//                     <Card.Img variant="top" src={image} />
//                     <Card.Body>
//                         <Card.Text>
//                             <h1>{likecount}</h1>
//                         </Card.Text>
//                         <Button variant="primary">Like</Button>
//                     </Card.Body>
//                 </Card>
//             ))}
//         </div>
//     )
// }

// export default PostCard;

// PostCard.jsx

//socail feed show all posts main page

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./card.css"; // Import your custom CSS file
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import UserPost from "../../pages/UserPost";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import img from "../SocialFeed/like.svg";

const PostCard = () => {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8800/post");
        setPosts(response.data.allPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleLike = async (postId) => {
    try {
      const response = await axios.put(
        `http://localhost:8800/post/like/${postId}`
      );
      const updatedPost = response.data.product;
      setPosts(posts.map((post) => (post._id === postId ? updatedPost : post)));
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  return (
    <div>
      <NavBar />
      <br />
      <h1
        style={{
          color: "black",
          textAlign: "center",
          fontSize: "60px",
          textShadow: "2px 2px #a8b1f7",
        }}
      >
        Social Feed
      </h1>

      <div className="grid-container">
        {posts.map(({ _id, imageUrl, likes, title }) => (
          <Card className="my-card" style={{ width: "18rem" }} key={_id}>
            <Card.Img variant="top" src={imageUrl} className="post-image " />
            <Card.Body>
              <div className="post-description">
                <Card.Text className="post-title">
                  <p>{title}</p>
                </Card.Text>
                <Card.Text className="card-likes">
                  <p>{likes}</p>
                  <img src={img} alt="like" className="like-img" />
                </Card.Text>
              </div>
              {/* <Link to={`/posts/${_id}`}>
                            <Button variant="primary">View Details</Button>
                        </Link> */}
              <div>
                <Button variant="primary" onClick={() => handleLike(_id)}>
                  Like
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
        <div>
          <Button
            variant="primary"
            className="floating-button"
            onClick={() => navigate("/post/userposts")}
          >
            Your Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
