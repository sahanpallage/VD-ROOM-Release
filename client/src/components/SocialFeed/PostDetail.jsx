// PostDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/post/${id}`); // Adjust the URL to match your backend endpoint
                setPost(response.data);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        fetchPost();
    }, [id]);

    return (
        <div>
            {post && (
                <div>
                    <h1>{post.title}</h1>
                    <img src={post.imageUrl} alt={post.title} />
                    <p>{post.likes}</p>
                </div>
            )}
        </div>
    );
};

export default PostDetail;
