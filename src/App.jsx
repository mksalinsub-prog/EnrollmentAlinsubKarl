import React from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import ContactDetails from "./components/ContactDetails";
import AcademicHistory from "./components/AcademicHistory";
import EnrollmentChoices from "./components/EnrollmentChoices";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Submitted Successfully!");
  };

  return (
    <div className="container">
      <h1>ADEi University Registration Portal</h1>
      <form onSubmit={handleSubmit}>

        <PersonalInfo />
        <ContactDetails />
        <AcademicHistory />
        <EnrollmentChoices />

        <button type="submit" className="submit-btn">
          Submit Registration
        </button>

      </form>
    </div>
  );
}

export default App;

