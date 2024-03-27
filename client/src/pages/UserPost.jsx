// import { useState } from "react";
// import { storage } from "../config/firebase";
// import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
// import axios from "axios";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";

// const UserPost = () => {
//   const [userTitle, setTitle] = useState("");
//   const [images, setImages] = useState([]);

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleImages = (e) => {
//     // Convert FileList object to array and concatenate with existing images array
//     const newImages = [...images, ...Array.from(e.target.files)];
//     setImages(newImages);
//   };

//   const submitPost = async () => {
//     try {
//       // Upload images to Firebase
//       const imageUrls = [];
//       for (let index = 0; index < images.length; index++) {
//         const image = images[index];
//         const storageRef = ref(storage, `gallery/images/${image.name}`);
//         await uploadBytes(storageRef, image);
//         const downloadURL = await getDownloadURL(storageRef);
//         imageUrls.push(downloadURL);
//       }

//       // Combine uploaded and existing image links
//       const postData = {
//         imageUrl: imageUrls,
//         title: userTitle,
//         userId: "test",
//         likes: 0,
//       };
//       console.log(postData);

//       await axios
//         .post(
//           `http://localhost:8800/post/create`,
//           postData
//           //   {
//           //     headers: {
//           //       Authorization: `Bearer ${token}`,
//           //     },
//           //   }
//         )
//         .then(() => {
//           // setExistingImages([...existingImages, ...updatedImages]);
//           // setimages([]);
//           alert("Images uploaded successfully");
//         });
//     } catch (error) {
//       console.error("Error uploading images:", error);
//       alert("Failed to upload images");
//       //   navigate("/login");
//     }
//   };
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     /* <>
//             <input type="text" name="title" value={userTitle} onChange={(e) => handleTitleChange(e)} />
//             <input type="file" name="image" onChange={(e) => handleImages(e)} multiple />
//             <button type="submit" onClick={submitPost}>Post</button>
//         </>*/

//     // <div
//     //   className="modal show"
//     //   style={{ display: "block", position: "initial" }}
//     // >
//     //   <Modal.Dialog>
//     //     <Modal.Header closeButton>
//     //       <Modal.Title>Upload Image</Modal.Title>
//     //     </Modal.Header>
//     <div>
//       {
//         // <Button variant="primary" onClick={handleShow}>
//         //   Open User Post
//         // </Button>
//         <Button
//           className="floating-button2 custom-button-color"
//           onClick={handleShow}
//         >
//           Add New Photo
//         </Button>
//         // <Button
//         //   className="floating-button2 custom-button-color"
//         //   onClick={handleShow}
//         // >
//         //   Add New Photo
//         // </Button>
//       }

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Upload New Imapge</Modal.Title>
//         </Modal.Header>
//         <Modal.Body></Modal.Body>

//         <Modal.Body>
//           <p>Enter Title</p>

//           <Form.Control
//             type="text"
//             placeholder="description"
//             value={userTitle}
//             onChange={(e) => handleTitleChange(e)}
//           />

//           <Form.Group
//             controlId="formFile"
//             className="mb-3"
//             onChange={(e) => handleImages(e)}
//             multiple
//           >
//             <Form.Label>Select File</Form.Label>
//             <Form.Control type="file" />
//           </Form.Group>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary">Close</Button>
//           <Button variant="primary" type="submit" onClick={submitPost}>
//             submit
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default UserPost;

// uploading userpost
import { useState } from "react";
import { storage } from "../config/firebase";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const UserPost = () => {
  const [userTitle, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // State to hold validation error message

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImages = (e) => {
    const newImages = [...images, ...Array.from(e.target.files)];
    setImages(newImages);
  };

  // Function to validate form inputs
  const validateInputs = () => {
    if (!userTitle.trim()) {
      setErrorMessage("Please enter a title"); // Set error message if title is empty
      return false;
    }
    if (images.length === 0) {
      setErrorMessage("Please select at least one image"); // Set error message if no images are selected
      return false;
    }
    setErrorMessage(""); // Clear error message if inputs are valid
    return true;
  };

  const submitPost = async () => {
    if (!validateInputs()) {
      // Check if inputs are valid
      return; // Prevent form submission if inputs are invalid
    }
    try {
      const imageUrls = [];
      for (let index = 0; index < images.length; index++) {
        const image = images[index];
        const storageRef = ref(storage, `gallery/images/${image.name}`);
        await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(storageRef);
        imageUrls.push(downloadURL);
      }

      const postData = {
        imageUrl: imageUrls,
        title: userTitle,
        userId: "test",
        likes: 0,
      };

      await axios.post(`http://localhost:8800/post/create`, postData);

      alert("Images uploaded successfully");
      setTitle(""); // Clear input fields after successful submission
      setImages([]);
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Failed to upload images");
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button
        className="floating-button2 custom-button-color"
        onClick={handleShow}
      >
        Add New Photo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload New Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}{" "}
          {/* Display error message if exists */}
          <Form.Control
            type="text"
            placeholder="Enter Title"
            value={userTitle}
            onChange={(e) => handleTitleChange(e)}
          />
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Select File</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => handleImages(e)}
              multiple
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitPost}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserPost;
