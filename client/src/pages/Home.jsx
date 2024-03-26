import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import { storage } from '../config/firebase';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import Sidebar from '../components/Sidebar';
import { useNavigate } from "react-router-dom";

const ImageUpload = () => {
    const [existingImages, setExistingImages] = useState([]);
    const [uploadedImages, setUploadedImages] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(() => {
        console.log(uploadedImages)
    }, [uploadedImages])

    useEffect(() => {
        console.log(existingImages)
    }, [existingImages])

    useEffect(() => {
        // Fetch existing image links from the backend

        const fetchImages = async () => {
            try {
                const response = await axios.get('https://meta-x-bk-ex.vercel.app/gallery/admin/655d83471c16c1429f3ff6f1',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                setExistingImages(response.data.links);
            } catch (error) {
                console.error('Error fetching images:', error);
                navigate("/login");
            }
        };
        fetchImages();
    }, []);

    const onDrop = (acceptedFiles) => {
        // Validate file count (min and max)
        if (existingImages.length + uploadedImages.length + acceptedFiles.length > 12) {
            alert('Cannot upload more than 12 images');
            return;
        }

        // Add new images to uploadedImages state
        setUploadedImages([...uploadedImages, ...acceptedFiles]);
    };

    const removeImage = (index, isUploaded) => {
        if (isUploaded) {
            const updatedImages = [...uploadedImages];
            updatedImages.splice(index, 1);
            setUploadedImages(updatedImages);
        } else {
            const updatedImages = [...existingImages];
            updatedImages.splice(index, 1);
            setExistingImages(updatedImages);
        }
    };


    const saveImages = async () => {
        if (existingImages.length + uploadedImages.length !== 12) {
            alert('Please upload exactly 12 images');
            return;
        }

        try {
            // Upload images to Firebase
            const updatedImages = [];
            for (let index = 0; index < uploadedImages.length; index++) {
                const image = uploadedImages[index];
                const storageRef = ref(storage, `gallery/images/${image.name}`);
                await uploadBytes(storageRef, image);
                const downloadURL = await getDownloadURL(storageRef);
                updatedImages.push(downloadURL);
            }

            // Combine uploaded and existing image links
            const combinedLinks = { links: [...existingImages, ...updatedImages] };
            console.log(combinedLinks);

            const imageId = "655d83471c16cscs429f3ff6f1"; // image array id

            await axios.put(`https://meta-x-backend-ex.vercel.app/gallery/update/${imageId}`, combinedLinks,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }).then(() => {
                    setExistingImages([...existingImages, ...updatedImages]);
                    setUploadedImages([]);
                    alert('Images uploaded successfully');

                })
        } catch (error) {
            console.error('Error uploading images:', error);
            alert('Failed to upload images');
            navigate("/login");
        }
    };

    return (
        <>
            <Sidebar />
            <div class="container-xxl position-relative bg-white d-flex p-0">
                <div className="main-container">
                    <h2>Existing Images</h2>
                    <div>
                        <div className="exsist-grid">
                            {existingImages.map((image, index) => (
                                <div className='image-card' key={index}>
                                    <img src={image} alt={`existing_image_${index}`} />
                                    <button className='btn btn-sm btn-danger m-2' onClick={() => removeImage(index, false)}>Remove</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="upload-section">
                        <h3>Upload New Images</h3>
                        <Dropzone onDrop={onDrop} accept="image/*">
                            {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps()} className="dropzone">
                                    <input {...getInputProps()} />
                                    <p>Drag and drop some files here, or click to select files</p>
                                </div>
                            )}
                        </Dropzone>
                        {uploadedImages.length > 0 && (
                            <div className='uploaded-images'>
                                <div className="uploaded-grid">
                                    {uploadedImages.map((image, index) => (
                                        <div className='image-card' key={index}>
                                            <img src={URL.createObjectURL(image)} alt={`image_${index}`} />
                                            <button className='btn btn-sm btn-danger m-2' onClick={() => removeImage(index, true)}>Remove</button>
                                        </div>
                                    ))}</div>
                            </div>
                        )}</div>
                    <button onClick={saveImages} className='btn btn-lg btn-primary m-2'>Save</button>
                </div>
            </div></>
    );
};

export default ImageUpload;
