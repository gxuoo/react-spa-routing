import { useEffect } from "react";
import useThemeStore from "./store/useThemeStore";
import Router from "./router/Router";

const App = () => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return <Router />;
};

export default App;
