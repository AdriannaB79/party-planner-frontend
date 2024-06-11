/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import firstBackground from "../img/custom_plan_1.png";

export default function PlannedParties({ user }) {
  const [parties, setParties] = useState([]);
  console.log("USER IN PLANNED PARTIES", user);
  useEffect(() => {
    const fetchPlannedParties = async () => {
      const res = await fetch("http://localhost:8080/api/parties/all-parties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id }),
      });
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
        <div key={party.id} className="center-content">
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
              <span className="highlight">{party.city}</span>at/in{" "}
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
    </div>
  );
}
