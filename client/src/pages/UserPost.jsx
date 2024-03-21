import { useState } from "react"
import { storage } from '../config/firebase';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import axios from "axios";

const UserPost = () => {
    const [userTitle, setTitle] = useState("")
    const [images, setImages] = useState([]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleImages = (e) => {
        // Convert FileList object to array and concatenate with existing images array
        const newImages = [...images, ...Array.from(e.target.files)];
        setImages(newImages);
    }


    const submitPost = async () => {

        try {
            // Upload images to Firebase
            const imageUrls = [];
            for (let index = 0; index < images.length; index++) {
                const image = images[index];
                const storageRef = ref(storage, `gallery/images/${image.name}`);
                await uploadBytes(storageRef, image);
                const downloadURL = await getDownloadURL(storageRef);
                imageUrls.push(downloadURL);
            }

            // Combine uploaded and existing image links
            const postData = { imageUrl: imageUrls, title: userTitle, userId: "test", likes: 0 };
            console.log(postData);


            await axios.post(`http://localhost:8800/post/create`, postData,
                //   {
                //     headers: {
                //       Authorization: `Bearer ${token}`,
                //     },
                //   }
            ).then(() => {
                // setExistingImages([...existingImages, ...updatedImages]);
                // setimages([]);
                alert('Images uploaded successfully');

            })
        } catch (error) {
            console.error('Error uploading images:', error);
            alert('Failed to upload images');
            //   navigate("/login");
        }
    };



    return (

        <>
            <input type="text" name="title" value={userTitle} onChange={(e) => handleTitleChange(e)} />
            <input type="file" name="image" onChange={(e) => handleImages(e)} multiple />
            <button type="submit" onClick={submitPost}>Post</button>
        </>

    )
}

export default UserPost;
// uploading userpost