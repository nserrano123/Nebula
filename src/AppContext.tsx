import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";
import { ThemeProvider } from "./contexts/theme_context";
import AppForm from "./components/form_example";
import CustomHook from "./components/custom_hook";
import FetchExample from "./components/fetch_example";
import UseStateExample from "./components/useState_example";
import "./styles/AppContext.css";

// Home component with a cards menu in two columns
const Home = () => {
  const navigate = useNavigate();
  const examples = [
    { id: 1, title: "AppForm", description: "Example of Controlled Components" },
    { id: 2, title: "CustomHook", description: "Example of a Custom Hook" },
    { id: 3, title: "Fetch Example", description: "Using Fetch API for data" },
    { id: 4, title: "UseState Example", description: "Using useState in React" },
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
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              {example.title}
            </h3>
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

// Individual Example Page using useParams hook
const ExamplePage = () => {
  const { id } = useParams<{ id: string }>();
  let content;

  switch (id) {
    case "1":
      content = <AppForm />;
      break;
    case "2":
      content = <CustomHook />;
      break;
    case "3":
      content = <FetchExample />;
      break;
    case "4":
      content = <UseStateExample />;
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
