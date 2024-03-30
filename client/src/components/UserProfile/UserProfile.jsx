// import React, { useState } from "react";
// import "./UserProfile.css";
// import Form from "react-bootstrap/Form";
// import Card from "react-bootstrap/Card";

// const UserProfile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [birthdate, setBirthdate] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     // Perform save logic here
//     setIsEditing(false);
//   };

//   return (
//     <div className="card">
//       <div className="profile-icon">{/* User profile icon */}</div>
//       <div className="user-details">
//         {isEditing ? (
//           <>
//             <Form.Control
//               type="text"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//             <br />

//             <Form.Control
//               type="text"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//             <br />

//             <Form.Control
//               type="date"
//               value={birthdate}
//               onChange={(e) => setBirthdate(e.target.value)}
//             />
//             <br />

//             <Form.Control
//               input
//               type="number"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//             />
//           </>
//         ) : (
//           <>
//             <label>First Name</label>
//             <p>{firstName}</p>
//             <label>Last Name</label>
//             <p>{lastName}</p>
//             <label>Email</label>
//             <p>Email</p>
//             <label>BirthDate</label>
//             <p>{birthdate}</p>
//             <label>Phone Number</label>
//             <p>{phoneNumber}</p>
//           </>
//         )}
//       </div>
//       <div className="edit-btn">
//         {isEditing ? (
//           <button onClick={handleSave}>Save</button>
//         ) : (
//           <button onClick={handleEdit}>Edit</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

import React from "react";
import { Formik, Form, Field } from "formik";
import { Form as BootstrapForm, Button, Image, Card } from "react-bootstrap";
import * as Yup from "yup";

const UserProfile = () => {
  const initialValues = {
    name: "John ",
    lname: "Doe",
    email: "johndoe@example.com",
    avatar: "https://via.placeholder.com/200",
    phoneNumber: "07012345678",
    birthdate: "1990-01-01",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const handleSubmit = (values) => {
    console.log("Saving user details:", values);
    // Add your logic to update user details (e.g., make an API call)
    // For demonstration purposes, we will just log the updated values
    alert("User details saved successfully!");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card style={{ width: "400px" }}>
        <Card.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange }) => (
              <Form>
                <Image src={values.avatar} roundedCircle />
                <BootstrapForm.Group>
                  <BootstrapForm.Label>First Name</BootstrapForm.Label>
                  <Field
                    as={BootstrapForm.Control}
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={touched.name && errors.name}
                  />
                  <BootstrapForm.Label>Last Name</BootstrapForm.Label>
                  <Field
                    as={BootstrapForm.Control}
                    name="lname"
                    value={values.lname}
                    onChange={handleChange}
                    isInvalid={touched.name && errors.lname}
                  />
                  <BootstrapForm.Control.Feedback type="invalid">
                    {errors.name}
                  </BootstrapForm.Control.Feedback>
                </BootstrapForm.Group>
                <BootstrapForm.Group>
                  <BootstrapForm.Label>Email</BootstrapForm.Label>
                  <Field
                    as={BootstrapForm.Control}
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={touched.email && errors.email}
                  />
                  <BootstrapForm.Control.Feedback type="invalid">
                    {errors.email}
                  </BootstrapForm.Control.Feedback>
                </BootstrapForm.Group>
                <BootstrapForm.Group>
                  <BootstrapForm.Label>Phone Number</BootstrapForm.Label>
                  <Field
                    as={BootstrapForm.Control}
                    type="text"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    isInvalid={touched.phoneNumber && errors.phoneNumber}
                  />
                  <BootstrapForm.Control.Feedback type="invalid">
                    {errors.phoneNumber}
                  </BootstrapForm.Control.Feedback>
                </BootstrapForm.Group>

                <BootstrapForm.Group>
                  <BootstrapForm.Label>Birthdate</BootstrapForm.Label>
                  <Field
                    as={BootstrapForm.Control}
                    type="date"
                    name="birthdate"
                    value={values.birthdate}
                    onChange={handleChange}
                    isInvalid={touched.birthdate && errors.birthdate}
                  />
                  <BootstrapForm.Control.Feedback type="invalid">
                    {errors.birthdate}
                  </BootstrapForm.Control.Feedback>
                </BootstrapForm.Group>

                <Button type="submit" variant="primary">
                  Save
                </Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserProfile;
