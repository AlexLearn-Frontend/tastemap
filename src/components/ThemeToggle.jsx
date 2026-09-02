import { useState, useEffect } from "react";
import { Button } from "@ui/button";
import { Moon, Sun } from "lucide-react";


export default function ThemeToggle() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    const root = window.document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="toggle theme"
      onClick={() => setDark(!dark)}
      className="h-btn"
    >
      {
        dark 
          ? (
            <Sun className="h-5 w-5" />
          ) 
          : (
            <Moon className="h-5 w-5" />
          )
      }
    </Button>
  );
}