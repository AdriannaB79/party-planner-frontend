import "../App.css";
import landingImage from "../img/landingImage.jpeg";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="row">
        <img src={landingImage} alt="Landing" className="landing_image" />
      </div>
      <div className="row flex flex-col md:flex-row">
        <div className="column text-left">
          <h1 className="party-planner-title">PARTY PLANNER</h1>
        </div>
        <div className="column text-left">
          <p className="party-planner-text">
            Welcome to our Party Planner App!!
            <br />
            We will help you to organise and manage all what you need to make
            your an incredibly amazing experience!!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
