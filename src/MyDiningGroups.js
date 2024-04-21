import React, { useState } from "react";
import "./App.css";

function MyDiningGroups({ onNavigate }) {
  const groups = [
    { name: "Mind Masters", users: ["Ali", "Rafay", "Bianca"] },
    { name: "Chill Vibes", users: ["Jeff", "Ali", "Claus"] },
    { name: "TA Group", users: ["Karan", "Ali", "Rafay"] },
    { name: "CS Lounge", users: ["Bianca", "Claus", "Rafay"] },
  ];

  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleGroupClick = (index) => {
    setSelectedGroup(index);
  };

  const handleConfirmGroup = () => {
    if (selectedGroup !== null) {
      onNavigate("GroupDining", { selectedGroup: groups[selectedGroup] });
    }
  };

  return (
    <div className="MyDiningGroups">
      <div className="content">
        <header className="header">
          <h2>My Dining Groups</h2>
          <button
            onClick={() => onNavigate("GroupDining")}
            className="orange-button"
          >
            New Group
          </button>
        </header>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="group-list">
          {groups.map((group, index) => (
            <div
              className={`group-item ${
                selectedGroup === index ? "selected" : ""
              }`}
              key={index}
              onClick={() => handleGroupClick(index)}
            >
              <div className="group-icon">
                <img src={require("./images/group.png")} alt="Group Icon" />
              </div>
              <div className="group-details">
                <p>{group.name}</p>
                <p>{group.users.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="button-container">
          <button onClick={handleConfirmGroup} className="orange-button">
            Confirm Group
          </button>
          <button onClick={() => onNavigate("Home")} className="orange-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyDiningGroups;
