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

//socail feed show all posts

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./card.css"; // Import your custom CSS file
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PostCard = () => {
    const [posts, setPosts] = useState([]);

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

    return (
        <div>
            <h1 className="page-header">Social Feed</h1>

            <div className="grid-container">


                {posts.map(({ _id, imageUrl, likes, title }) => (
                    <Card style={{ width: '18rem' }} key={_id}>
                        <Card.Img variant="top" src={imageUrl} className="post-image" />
                        <Card.Body>
                            <Card.Text className="post-title">
                                <h1>{title}</h1>
                            </Card.Text>
                            <Card.Text>
                                <h1>{likes}</h1>
                            </Card.Text>
                            {/* <Link to={`/posts/${_id}`}>
                            <Button variant="primary">View Details</Button>
                        </Link> */}
                            <div>
                                <Button variant="primary">Like</Button>
                            </div>
                        </Card.Body>
                    </Card>

                ))}
                <div>
                    <Button variant="primary" className="floating-button">Your Profile</Button>
                </div>

            </div>
        </div>

    );
};

export default PostCard;
