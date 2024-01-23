import { useTheme } from "../context/ThemeChangeContext";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const divClassName = theme == "light" ? "bg-white" : "text-white bg-black";
  return (
    <button
      className={divClassName}
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      change theme
    </button>
  );
};
