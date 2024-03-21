
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// //import "./App.css";
// import UserPost from "./pages/UserPost";
// import Card from "./components/SocialFeed/Card";
// import PostCard from "./components/SocialFeed/PostCard";

// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div className="App">
      
//         <PostCard />
//         {/* <UserPost /> */}
     
//    <BrowserRouter> 
//     <Routes>
//     {/* <Route index element={<Home />} />
//     <Route path="/home" element={<Home />} />
//     <Route path="/about" element={<About />} /> */}
//     <Route path="/post/create" element={<UserPost />} />
    
//     </Routes>
//     </BrowserRouter> 
//     </div>
  

//   );
// }

// export default App;

// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostCard from "./components/SocialFeed/PostCard";
import PostDetail from "./components/SocialFeed/PostDetail";
import UserPost from "./pages/UserPost";
import UserProfilePosts from "./pages/UserProfilePosts";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
      <Router>
      <Routes>
          <Route path="/" element={<PostCard />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/post/create" element={<UserPost />} />
             <Route path="/post/userposts" element={<UserProfilePosts />} />
      </Routes>
  </Router>
    );
};

export default App;
