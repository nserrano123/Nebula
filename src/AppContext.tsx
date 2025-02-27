import { useTheme, ThemeProvider } from "./contexts/theme_context";
import Switch from "./components/switch";
import React from "react";
import "./styles/AppContext.css";

import AppForm from "./form_example";
import CustomHook from "./components/custom_hook";
import FetchExample from "./components/fetch_example";
import UseStateExample from "./components/useState_example";

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme(); // ✅ Se obtiene el theme desde el contexto
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

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

const App = () => {
  const { theme } = useTheme(); // ✅ Se obtiene theme dentro de App
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
};

function Root() {
  return (
    <ThemeProvider>
      <div>
        <h2>Ejemplo de uso de Contexto</h2>
        <App />

        <h2>Ejemplo de Controlled Components</h2>
        <div>
          <AppForm />
        </div>

        <h2>Ejemplo de Custom Hook</h2>
        <div>
          <CustomHook />
        </div>

        <h2>Ejemplo de Fetch</h2>
        <div>
          <FetchExample />
        </div>

        <h2>Ejemplo useState</h2>
        <div>
          <UseStateExample />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Root;
