import { useLocation, useNavigate } from "react-router-dom";
import firstBackground from "../img/custom_plan_1.png";
import "../App.css";

const CustomPLan = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { formData } = state;

  const handleNext = () => {
    navigate("/customlist", { state: { formData } });
  };

  return (
    <div className="bg-milky-coffee flex flex-col items-center p-8">
      <div className="flex w-full max-w-4x1 my-8">
        <div
          className="w-1/2 p-4"
          style={{
            backgroundImage: `url(${firstBackground})`,
            backgroundSize: "cover",
          }}
        >
          <p className="customplan-content p-4">
            You choose to organize your {formData.eventType} in {formData.city}{" "}
            at/in {formData.location}. You include {formData.meals.join(", ")}{" "}
            and {formData.drinks}. There should be {formData.guests} friends
            invited. Your budget is {formData.budget}.
          </p>
        </div>
        <div
          className="w-1/2 p-4"
          style={{
            backgroundImage: `url(${firstBackground})`,
            backgroundSize: "cover",
          }}
        >
          <p className="customplan-content p-4">
            At the next steps we will show you where to reserve your place, buy
            all your stuff and in what period of time you need to do all, to be
            ready on time!
          </p>
        </div>
      </div>
      <div className="w-full max-w-4x1 flex justify-end p-4">
        <button onClick={handleNext} className="btn-customplan">
          Go to see your plan!
        </button>
      </div>
    </div>
  );
};

export default CustomPLan;
