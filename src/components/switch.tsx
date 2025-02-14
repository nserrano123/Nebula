import { useTheme } from "../contexts/theme_context";
import '../styles/switch.css';

const Switch = () => {
  const { theme , toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
