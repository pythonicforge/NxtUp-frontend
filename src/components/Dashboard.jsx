import React, { useState } from "react";
import { MdEventNote } from "react-icons/md";
import { GiSwordWound } from "react-icons/gi";
import { FaFlagCheckered } from "react-icons/fa";
import Events from "./Events";
import Clans from "./Clans";
import Clubs from "./Clubs";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("events"); // Default tab is 'Events'

  const renderContent = () => {
    switch (activeTab) {
      case "events":
        return <Events />;
      case "clubs":
        return <Clubs />;
      case "clans":
        return <Clans />;
      default:
        return <p>Select an option from the sidebar.</p>;
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-sidebar">
        <ul>
          <li
            className={activeTab === "events" ? "active" : ""}
            onClick={() => setActiveTab("events")}
          >
            <div className="dashboard-item">
              <MdEventNote />
              <span className="dashboard-text">Events</span>
            </div>
          </li>
          <li
            className={activeTab === "clubs" ? "active" : ""}
            onClick={() => setActiveTab("clubs")}
          >
            <div className="dashboard-item">
              <FaFlagCheckered />
              <span className="dashboard-text">Clubs</span>
            </div>
          </li>
          <li
            className={activeTab === "clans" ? "active" : ""}
            onClick={() => setActiveTab("clans")}
          >
            <div className="dashboard-item">
              <GiSwordWound />
              <span className="dashboard-text">Clans</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="dashboard-content">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
