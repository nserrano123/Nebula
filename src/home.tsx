import React, { useState } from "react";
import AppFormPage from "./page/app_form_page";
import CustomHook from "./components/custom_hook";
import FetchExample from "./components/fetch_example";
import UseStateExample from "./components/useState_example";

const Home: React.FC = () => {
  // State to track the selected exercise
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);

  // List of exercises with titles and descriptions
  const exercises = [
    { id: 1, title: "AppForm", description: "Example of Controlled Components" },
    { id: 2, title: "CustomHook", description: "Example of a Custom Hook" },
    { id: 3, title: "Fetch Example", description: "Using Fetch API for data" },
    { id: 4, title: "UseState Example", description: "Using useState in React" },
    // You can add more exercises here
  ];

  // Handle click to select an exercise
  const handleCardClick = (id: number) => {
    setSelectedExercise(id);
  };

  // Render the selected exercise page dynamically
  const renderSelectedExercise = () => {
    switch (selectedExercise) {
      case 1:
        return <AppFormPage />;
      case 2:
        return <CustomHook />;
      case 3:
        return <FetchExample />;
      case 4:
        return <UseStateExample />;
      default:
        return <div>Select an exercise to see more details.</div>;
    }
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-6 p-6">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => handleCardClick(exercise.id)}
          >
            <h3 className="text-xl font-semibold mb-4">{exercise.title}</h3>
            <p className="text-gray-500 mb-6">{exercise.description}</p>
            <button className="bg-blue-500 text-white p-2 rounded-md w-full">
              Go to Page
            </button>
          </div>
        ))}
      </div>

      {/* Display selected exercise content */}
      <div className="mt-6">
        {renderSelectedExercise()}
      </div>
    </div>
  );
};

export default Home;
