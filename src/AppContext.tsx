import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme_context";
import './styles/AppContext.css';
import './App.css';

// DessertsList Component
interface Dessert {
  name: string;
  calories: number;
  createdAt: string;
}

const DessertsList = ({ data }: { data: Dessert[] }) => {
  const dessertList = data
    .filter(dessert => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories)
    .map(dessert => {
      const itemText = `${dessert.name} - ${dessert.calories} calories`;
      return <li key={dessert.name}>{itemText}</li>;
    });

  return (
    <div>
      <ul>
        {dessertList}
      </ul>
    </div>
  );
};

// Home Component with a cards menu and DessertsList route
const Home = () => {
  const navigate = useNavigate();
  const examples = [
    { id: 1, title: "AppForm", description: "Example of Controlled Components" },
    { id: 2, title: "CustomHook", description: "Example of a Custom Hook" },
    { id: 3, title: "Fetch Example", description: "Using Fetch API for data" },
    { id: 4, title: "UseState Example", description: "Using useState in React" },
    { id: 5, title: "Desserts List", description: "List of low calorie desserts" },
  ];

  const handleCardClick = (id: number) => {
    navigate(`/example/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="grid grid-cols-2 gap-6 max-w-4xl w-full">
        {examples.map((example) => (
          <div
            key={example.id}
            className="p-6 bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleCardClick(example.id)}
          >
            <h3 className="mb-2 text-xl font-semibold text-gray-900">{example.title}</h3>
            <p className="text-gray-600">{example.description}</p>
            <button className="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition-colors">
              Go to Page
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Individual Example Page
const ExamplePage = () => {
  const { id } = useParams();
  let content;

  switch (id) {
    case "1":
      content = <DessertsListPage />;
      break;
    case "2":
      content = <div>AppForm Example</div>;
      break;
    case "3":
      content = <div>CustomHook Example</div>;
      break;
    case "4":
      content = <div>Fetch Example</div>;
      break;
    case "5":
      content = <div>UseState Example</div>;
      break;
    default:
      content = <div>Example not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Example {id}</h2>
      {content}
    </div>
  );
};

// Desserts List Page Component
const DessertsListPage = () => {
  const desserts = [
    { name: "Chocolate Cake", calories: 400, createdAt: "2022-09-01" },
    { name: "Ice Cream", calories: 200, createdAt: "2022-01-02" },
    { name: "Tiramisu", calories: 300, createdAt: "2021-10-03" },
    { name: "Cheesecake", calories: 600, createdAt: "2022-01-04" },
  ];

  return (
    <div>
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
    </div>
  );
};

// Custom hook for our routes
function useAppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/example/:id" element={<ExamplePage />} />
    </Routes>
  );
}

// Root component wrapping our routes with ThemeProvider and Router
function Root() {
  const routes = useAppRoutes();
  return (
    <ThemeProvider>
      <Router>
        {routes}
      </Router>
    </ThemeProvider>
  );
}

export default Root;
