import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DressingRoom from "./pages/DressingRoom";

function App() {
  return (
    <div className="App">
   <BrowserRouter> 
    <Routes>
    {/* <Route index element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} /> */}
    <Route path="/droom" element={<DressingRoom />} />
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
