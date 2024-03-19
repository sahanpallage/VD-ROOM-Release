
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import "./App.css";
import UserPost from "./pages/UserPost";
import Card from "./components/SocialFeed/Card";
import PostCard from "./components/SocialFeed/PostCard";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
        <PostCard />
     
   <BrowserRouter> 
    <Routes>
    {/* <Route index element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} /> */}
    <Route path="/post/create" element={<UserPost />} />
    
    </Routes>
    </BrowserRouter> 
    </div>
  

  );
}

export default App;

// // function App() {

//   // return (
//     <>
//      Hello world!
//      {/* all page routes comes here  like below */}

//      {/* <BrowserRouter>
//     <Routes>
//     <Route index element={<Home />} />
//     <Route path="/home" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     </Routes>
//     </BrowserRouter> */}

//     </>
//   )
// }