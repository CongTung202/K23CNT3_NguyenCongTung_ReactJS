import { useTheme } from "../context/NctThemeConText"; // Ensure the path is correct
import "../App.css";
export default function NctThemeToggle() {
  const { theme, NctToggleTheme } = useTheme(); // Use the correct function name

  return (
    <button
      className="btn btn-warning backgroundtheme mt-3"
      onClick={NctToggleTheme}
    >
      Chế Độ: {theme === "light" ? "Tối" : "Sáng"}
    </button>
  );
}
