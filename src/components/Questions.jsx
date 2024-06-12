/* eslint-disable react/prop-types */
import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Questions = ({ user }) => {
  const [formData, setFormData] = useState({
    city: "",
    location: "Home",
    partyType: "Anniversary",
    decorations: [],
    foodType: [],
    drinksType: "nonalcohol",
    numberOfPeople: "",
    budget: "",
    date: "",
    age: user.age,
    user: user.id,
  });
  const [showModal, setShowModal] = useState(false);

  console.log("USER IN QUESTIONS", user);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked
          ? [...formData[name], value]
          : formData[name].filter((item) => item !== value),
      });
    } else if (name === "decorations" || name === "foodType") {
      setFormData({
        ...formData,
        [name]: [...formData[name], value],
      });
    } else if (type === "number") {
      setFormData({
        ...formData,
        [name]: Number(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const confirmSubmit = async () => {
    setShowModal(false);
    const res = await fetch(
      "https://party-planner-backend-iw93.onrender.com/api/parties",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await res.json();
    console.log("SUBMITTED: ", data);
    navigate("/planned-parties");
  };

  const cancelSubmit = () => {
    setShowModal(false);
  };

  return (
    <div className="background_question">
      <form onSubmit={handleSubmit} className="form-container">
        <h1 className="landing_title">Let us know more about your plans</h1>
        <div className="flex flex-wrap">
          <div className="w-full p-4"></div>
        </div>
        <div className="questions-table-container">
          <table className="questions-table">
            <tbody>
              <tr>
                <td className="table-cell">
                  <label>
                    In which city do you want to organise your party?
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="input"
                  />
                </td>
                <td className="table-cell">
                  <label>
                    Where exactly do you want to organise your party?
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="Home">At Home</option>
                    <option value="Restaurant">At Restaurant</option>
                    <option value="Hotel">In hotel</option>
                    <option value="Garden">In Garden</option>
                    <option value="Park">In Park</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="table-cell">
                  <label>What kind of party do you want to organise?</label>
                  <select
                    name="partyType"
                    value={formData.partyType}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="Anniversary">Anniversary</option>
                    <option value="Surprise Party">Surprise Party</option>
                    <option value="Babyshower">Babyshower</option>
                    <option value="Friends Reunion">Friends Reunion</option>
                    <option value="Family Reunion">Family Reunion</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Engagment">Engagment</option>
                    <option value="Graduation">Graduation</option>
                    <option value="School Beginning">School Beginning</option>
                    <option value="Retairment">Retairment Party</option>
                  </select>
                </td>
                <td className="table-cell">
                  <label>
                    What kind of decorations would you like to include?
                  </label>
                  <select
                    multiple
                    name="decorations"
                    value={formData.decorations}
                    onChange={handleChange}
                    className="input"
                  >
                    {[
                      "Baloon",
                      "Babbles",
                      "Flowers",
                      "Kites",
                      "Boho Decorations",
                      "Paper Decorations",
                      "Garden Decorations",
                      "Lights",
                    ].map((decoration) => (
                      <option key={decoration} value={decoration}>
                        {decoration}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td className="table-cell">
                  <label>What kind of food would you like to have?</label>
                  <select
                    multiple
                    name="foodType"
                    value={formData.foodType}
                    onChange={handleChange}
                    className="input"
                  >
                    {[
                      "Full vegetarian menu",
                      "Full vegan menu",
                      "Full menu",
                      "Only snacks",
                      "Vegetable and fruits snacks",
                      "Lactose and gluten-free menu",
                    ].map((foodType) => (
                      <option key={foodType} value={foodType}>
                        {foodType}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="table-cell">
                  <label>What kind of drinks would you like to have?</label>
                  <select
                    name="drinksType"
                    value={formData.drinksType}
                    onChange={handleChange}
                    className="input"
                    disabled={formData.age <= 18}
                  >
                    <option value="nonalcohol">Non-alcohol</option>
                    <option value="alcohol and non-alcohol">
                      Alcohol and Non-alcohol
                    </option>
                    <option value="alcohol">Alcohol</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="table-cell">
                  <label>How many people would you like to invite?</label>
                  <input
                    type="number"
                    min={0}
                    name="numberOfPeople"
                    value={formData.numberOfPeople}
                    onChange={handleChange}
                    className="input"
                  />
                </td>
                <td className="table-cell">
                  <label>What is your budget (in €)?</label>
                  <input
                    min={100}
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="input"
                  />
                </td>
              </tr>
              <tr>
                <td className="table-cell">
                  <label>When do you want to organise the party?</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="input"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button type="submit" className="w-full btn-send p-2 mt-4">
          Send
        </button>
      </form>

      {showModal && (
        <div className="modal-container">
          <div className="background_showModal rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Confirm Your Details</h2>
            <div className="mb-4">
              <p>
                <strong>City:</strong> {formData.city}
              </p>
              <p>
                <strong>Location:</strong> {formData.location}
              </p>
              <p>
                <strong>Party Type:</strong> {formData.partyType}
              </p>
              <p>
                <strong>Decorations:</strong> {formData.decorations.join(", ")}
              </p>
              <p>
                <strong>Food Type:</strong> {formData.foodType.join(", ")}
              </p>
              <p>
                <strong>Drinks Type:</strong> {formData.drinksType}
              </p>
              <p>
                <strong>Number of People:</strong> {formData.numberOfPeople}
              </p>
              <p>
                <strong>Budget:</strong> {formData.budget}
              </p>
              <p>
                <strong>Date:</strong> {formData.date}
              </p>
            </div>
            <div className="flex justify-end">
              <button onClick={confirmSubmit} className="modal-btn confirm">
                Confirm and see your planned parties
              </button>
              <button onClick={cancelSubmit} className="modal-btn cancel">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Questions;
