import { useTheme, ThemeProvider } from "./contexts/theme_context";
import Switch from "./components/switch";
import React from "react";
import "./styles/AppContext.css";
import DessertsList from "./DessertsList";
import AppForm from "./AppForm";

const Title: React.FC = ({children}) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph : React.FC = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would
        make me stop trying all of the others.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (

    <div>

    <h2>
      Ejemplo de uso de Contexto

    </h2>

      
 
    <ThemeProvider>
      <App />
     <div>

      <h2>
        Ejemplo de Controlled Components

        </h2>

        <div>
      <AppForm/>

        </div>

     
     </div>
    </ThemeProvider>

    </div>
  );
}

export default Root;
