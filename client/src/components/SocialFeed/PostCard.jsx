import React from "react";
import Data from "./data";
import "./card.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PostCard = () => {
    return (
        <div className="grid-container">
            {Data.map(({ id, image, likecount }) => (
                <Card style={{ width: '18rem' }} key={id}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Text>
                            <h1>{likecount}</h1>
                        </Card.Text>
                        <Button variant="primary">Like</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}


export default PostCard;