import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Home from "./Component/Home/Home";
import Signin from "./Component/Signin/Signin";
import Signup from "./Component/Signup/Signup";
import AdminSignin from "./Component/Staff/AdminSignin";
import Course from "./Component/Course/Course";
import Faq from "./Component/Faq/Faq";
import Dashboard from "./Component/Dashboard/Dashboard";
import About from "./Component/About/About";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
    
        {/* signIn & signUp */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* {   STAFF} */}
        <Route path="/AdminSignin" element={<AdminSignin/>} />
        <Route path="/Course" element={<Course/>} />
        <Route path="/Faq" element={<Faq/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/About" element={<About/>} />
       
      </Routes>
    </>
  );
}

export default App;
