/* eslint-disable react/prop-types */
import { useState } from "react";
import "../App.css";

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked
          ? [...formData[name], value]
          : formData[name].filter((item) => item !== value),
      });
    } else if (name === "decorations") {
      setFormData({
        ...formData,
        decorations: [...formData.decorations, value],
      });
    } else if (name === "foodType") {
      setFormData({
        ...formData,
        foodType: [...formData.foodType, value],
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
    const res = await fetch("http://localhost:8080/api/parties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log("SUBMITTED: ", data);
  };

  const cancelSubmit = () => {
    setShowModal(false);
  };

  return (
    <div className="background_question">
      <form onSubmit={handleSubmit} className="w-full max-w mx-auto">
        <h1 className="landing_title">Let us know more about your plans</h1>
        <div className="flex">
          <div className="w-1/2 p-4"></div>
        </div>
        <table className="table-auto w-full border-collapse mx-auto question_content">
          <tbody>
            <tr>
              <td className="border p-2 pr-4 justify-between text-center shadow-sm">
                <label>In which city do you want to organise your party?</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="border p-1 w-full"
                />
              </td>
              <td className="border p-2 pr-4 text-center">
                <label>Where exactly do you want to organise your party?</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="border p-2 w-full"
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
              <td className="border p-2 pr-4 text-center">
                <label>What kind of party do you want to organise?</label>
                <select
                  name="partyType"
                  value={formData.partyType}
                  onChange={handleChange}
                  className="border p-2 w-full"
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
              <td className="border p-2 pr-4 text-center">
                <label>
                  What kind of decorations would you like to include?
                </label>
                <select
                  multiple
                  name="decorations"
                  value={formData.decorations}
                  onChange={handleChange}
                  className="boder p-2 w-full"
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
              <td className="border p-2 pr-4 text-center">
                <label>What kind of food would you like to have?</label>
                <select
                  multiple
                  name="foodType"
                  value={formData.foodType}
                  onChange={handleChange}
                  className="border p-2 w-full"
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
              <td className="border p-2 pr-4 text-center">
                <label>What kind of drinks would you like to have?</label>
                <select
                  name="drinksType"
                  value={formData.drinksType}
                  onChange={handleChange}
                  className="border p-2 w-full"
                  disabled={formData.age <= 18 ? true : false}
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
              <td className="border p-2 pr-4 text-center">
                <label>How many people would you like to invite?</label>
                <input
                  type="number"
                  min={0}
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  className="border p-2 w-full"
                />
              </td>
              <td className="border p-2 pr-4 text-center">
                <label>What is your budget?</label>
                <input
                  min={100}
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="border p-2 w-full"
                />
              </td>
            </tr>
            <tr>
              <td className="border p-2 pr-4 text-center">
                <label>When do you want to organise the party?</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="border p-2 w-full"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="w-full btn-send p-2 mt-4">
          Send
        </button>
      </form>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="background_showModel rounded-lg p-6 w-full max-w-md">
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
              <button
                onClick={confirmSubmit}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-2"
              >
                Confirm
              </button>
              <button
                onClick={cancelSubmit}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
              >
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
