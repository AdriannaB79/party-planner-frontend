/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import firstBackground from "../img/custom_plan_1.png";

export default function PlannedParties({ user }) {
  const [parties, setParties] = useState([]);
  const [showUnderConstructionMessage, setShowUnderConstructionMessage] =
    useState(false); // Dodajemy stan

  useEffect(() => {
    const fetchPlannedParties = async () => {
      const res = await fetch(
        "https://party-planner-backend-iw93.onrender.com/api/parties/all-parties",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: user.id }),
        }
      );
      const data = await res.json();
      console.log(data);
      setParties(data);
    };
    user && fetchPlannedParties();
  }, [user]);

  return (
    <div className="planned_parties">
      <h1 className="party-planner-title">Planned parties</h1>
      {parties.map((party) => (
        <div
          key={party.id}
          className="center-content"
          onClick={() => setShowUnderConstructionMessage(true)}
        >
          {" "}
          <div
            className="w-1/2 p-4"
            style={{
              backgroundImage: `url(${firstBackground})`,
              backgroundSize: "cover",
            }}
          >
            <p className="customplan-content p-4 justify-center">
              You choose to organize your{" "}
              <span className="highlight">{party.partyType}</span> party in
              <span className="highlight"></span>{" "}
              <span className="highlight">{party.city}</span> at/in{" "}
              <span className="highlight">{party.location}</span>.
              <br />
              There should be{" "}
              <span className="highlight">{party.numberOfPeople}</span> friends
              that you invited. <br />
              You choose to have{" "}
              <span className="highlight">
                {party.foodType.join(", ")}
              </span> and <span className="highlight">{party.drinksType} </span>
              dinks. You will decorate your party using{" "}
              <span className="highlight">
                {party.decorations.join(", ")}
              </span>{" "}
              <br />
              Your budget is <span className="highlight">
                {party.budget}
              </span>{" "}
              €.
            </p>
          </div>
        </div>
      ))}
      {showUnderConstructionMessage && ( // Dodajemy warunek do wyświetlania komunikatu
        <div className="under-construction-message background_show_construction rounded-lg p-6 w-full max-w-md">
          <p>
            Work in progress.
            <hr />I am gathering all information to help you organize your
            party!
          </p>
          <button
            className="btn_close"
            onClick={() => setShowUnderConstructionMessage(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
