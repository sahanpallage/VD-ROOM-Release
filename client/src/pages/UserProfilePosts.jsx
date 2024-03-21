// import React, { useEffect, useState } from 'react';
// import PostCard from '../components/SocialFeed/PostCard';
// import UserPost from './UserPost';
// import "../components/SocialFeed/card.css";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import axios from "axios";



// const UserProfilePosts = () => {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         const fetchPosts = async () => {
//             try {
//                 const response = await axios.get("http://localhost:8800/post");
//                 setPosts(response.data.allPosts);
//             } catch (error) {
//                 console.error("Error fetching posts:", error);
//             }
//         };

//         fetchPosts();
//     }, []);

//     // const handleDelete = (postId) => {
//     //     // Logic to delete the post with the given postId
//     //     // Update the posts state to remove the deleted post
//     // };

//     // const handleAddPost = () => {
//     //     // Logic to add a new post
//     //     // Update the posts state to include the new post
//     // };

//     return (


//         <div>

//             <h1 className="page-header">User Feed</h1>

//             <div className="grid-container">

//                 <div>
//                     <Button className="floating-button2 custom-button-color">Add New Photo</Button>
//                 </div>

//                 {posts.map(({ _id, imageUrl, likes, title }) => (
//                     <Card style={{ width: '18rem' }} key={_id}>
//                         <Card.Img variant="top" src={imageUrl} className="post-image" />
//                         <Card.Body>
//                             <Card.Text className="post-title">
//                                 <h1>{title}</h1>
//                             </Card.Text>
//                             <Card.Text>
//                                 <h1>{likes}</h1>
//                             </Card.Text>
//                             {/* <Link to={`/posts/${_id}`}>
//                             <Button variant="primary">View Details</Button>
//                         </Link> */}
//                             <Button variant="danger">Delete</Button>
//                         </Card.Body>
//                     </Card>

//                 ))}


//             </div>
//         </div>

//     );
// };

// export default UserProfilePosts;

import React, { useEffect, useState } from 'react';
import PostCard from '../components/SocialFeed/PostCard';
import UserPost from './UserPost';
import "../components/SocialFeed/card.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";


const UserProfilePosts = () => {
    const [posts, setPosts] = useState([]);

    const handleDelete = async (postId) => {
        try {
            await axios.delete(`http://localhost:8800/post/${postId}`);
            setPosts(posts.filter(post => post._id !== postId));
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

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
            <h1 className="page-header">User Feed</h1>
            <div className="grid-container">
                <div>
                    <Button className="floating-button2 custom-button-color" >Add New Photo</Button >
                </div>
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
                            <Button variant="danger" onClick={() => handleDelete(_id)}>Delete</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default UserProfilePosts;