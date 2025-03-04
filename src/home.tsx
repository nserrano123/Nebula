import React, { useState } from "react";
import AppFormPage from "./page/app_form_page";
import CustomHook from "./components/custom_hook";
import FetchExample from "./components/fetch_example";
import UseStateExample from "./components/useState_example";
import InteractiveRectangle from "./components/useEffect_example";

const Home: React.FC = () => {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);

  // Define exercise type for better type safety
  interface Exercise {
    id: number;
    title: string;
    description: string;
  }

  const exercises: Exercise[] = [
    { id: 1, title: "AppForm", description: "Example of Controlled Components" },
    { id: 2, title: "CustomHook", description: "Example of a Custom Hook" },
    { id: 3, title: "Fetch Example", description: "Using Fetch API for data" },
    { id: 4, title: "UseState Example", description: "Using useState in React" },
    { id: 5, title: "UseEffect Example", description: "Using useEffect in React" },
  ];

  const handleCardClick = (id: number) => {
    console.log(`Selected exercise: ${id}`); // Debug log
    setSelectedExercise(id);
  };

  const renderSelectedExercise = () => {
    console.log(`Rendering exercise: ${selectedExercise}`); // Debug log
    if (selectedExercise === null) {
      return <div>Select an exercise to see more details.</div>;
    }
    switch (selectedExercise) {
      case 1:
        return <AppFormPage />;
      case 2:
        return <CustomHook />;
      case 3:
        return <FetchExample />;
      case 4:
        return <UseStateExample />;
      case 5:
        return <InteractiveRectangle />;
      default:
        return <div>Select an exercise to see more details.</div>;
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-6">
        React Exercises Demo
      </h1>
      
      {/* Exercise Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl 
              transition-all duration-300 cursor-pointer ${
              selectedExercise === exercise.id ? 'border-2 border-blue-500' : ''
            }`}
            onClick={() => handleCardClick(exercise.id)}
          >
            <h3 className="text-xl font-semibold mb-4">{exercise.title}</h3>
            <p className="text-gray-500 mb-6">{exercise.description}</p>
            <button 
              className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600"
              onClick={(e) => e.stopPropagation()} // Prevent button click from triggering card click
            >
              Go to Page
            </button>
          </div>
        ))}
      </div>

      {/* Selected Exercise Display */}
      <div className="mt-6 p-6 bg-gray-100 rounded-lg">
        {renderSelectedExercise()}
      </div>
    </div>
  );
};

export default Home;
