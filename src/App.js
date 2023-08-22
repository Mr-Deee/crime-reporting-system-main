import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Report from "./Pages/Report";
import Aboutpage from "./Pages/About/Aboutpage";
import Signin from "./Pages/Auth/sign-in/Signin";
import Navbar from "./components/navbar/Navbar";
import Footer from "./Pages/Footer/footer"; // Adjust the path based on your file structure
import SignUpPage from "./Pages/Auth/sign-up/Signup";
import Assigncrime from "./Pages/assigncrime";
import SignOut from "./Pages/Auth/SignOut/signout";
import ContactPage from "./Pages/Contact/Contact";
import Pendingcase from "./Pages/pendingcase";
import Solvedcases from "./Pages/solvedcases";
import Dashboard from "./Pages/dashboard";

function App() {
  return (
    <div className="App">
  <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/assigncrime" element={<Assigncrime />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/signout" element={<SignOut />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/report" element={<Report />}></Route>
        <Route path="/aboutpage" element={<Aboutpage />}></Route>
        <Route path="/pendingcases" element={<Pendingcase />}></Route>
        <Route path="/solvedcases" element={<Solvedcases />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
