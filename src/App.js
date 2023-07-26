import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Report from "./Pages/Report";
import Aboutpage from "./Pages/Aboutpage";
import Signin from "./Pages/Auth/sign-in/Signin";
import Navbar from "./components/navbar/Navbar";
import Footer from "./Pages/Footer/footer"; // Adjust the path based on your file structure
import SignUpPage from "./Pages/Auth/sign-up/Signup";
import Assigncrime from "./Pages/assigncrime";
import SignOut from "./Pages/Auth/SignOut/signout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/assigncrime" element={<Assigncrime />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/signout" element={<SignOut />}></Route>

        <Route path="/report" element={<Report />}></Route>
        <Route path="/aboutpage" element={<Aboutpage />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
