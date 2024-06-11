import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Questions from "./components/Questions";
import PlannedParties from "./components/PlannedParties";
import CustomPlan from "./components/CustomPlan";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import AboutApp from "./components/AboutApp";
import "./App.css";
import LandingPage from "./components/LandingPage";
import logo from "./img/logo_new.png";
import planParties from "./img/btn_plan.png";
import seePlan from "./img/btn-see-plan.png";

import homeBackground from "./img/question_bg.png";
import reviewBackground from "./img/Review_bg.png";
import customPlanBackground from "./img/custom_plan_bg.png";
import loginBackground from "./img/LogIn_bg.png";
import signupBackground from "./img/SignIn_bg.png";
import aboutBackground from "./img/AboutApp_bg.png";
import landingBackground from "./img/landing_page_bg.png";

function App() {
  const [user, setUser] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [user]);

  console.log(user);

  useEffect(() => {
    // Define the background images for each route
    switch (location.pathname) {
      case "/":
        setBackgroundImage(homeBackground);
        break;
      case "/review":
        setBackgroundImage(reviewBackground);
        break;
      case "/planned-parties":
        setBackgroundImage(customPlanBackground);
        break;
      case "/login":
        setBackgroundImage(loginBackground);
        break;
      case "/signup":
        setBackgroundImage(signupBackground);
        break;
      case "/about":
        setBackgroundImage(aboutBackground);
        break;
      case "/landing":
        setBackgroundImage(landingBackground);
        break;
      default:
        setBackgroundImage("default-background.jpg");
    }
  }, [location.pathname]);

  return (
    <div className="App min-h-screen flex flex-col">
      <Navbar
        user={user}
        setUser={setUser}
        logo={logo}
        backgroundImage={backgroundImage}
        planParties={planParties}
        seePLan={seePlan}
      />
      <Routes>
        <Route
          path="/"
          element={user ? <Questions user={user} /> : <LandingPage />}
        />

        <Route path="/customplan" element={<CustomPlan />} />
        <Route
          path="/login"
          element={!user ? <Login setUser={setUser} /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup setUser={setUser} /> : <Navigate to="/" />}
        />
        <Route path="/about" element={<AboutApp />} />
        <Route
          path="/planned-parties"
          element={<PlannedParties user={user} />}
        />
      </Routes>
      <Footer backgroundImage={backgroundImage} />
    </div>
  );
}

export default App;
