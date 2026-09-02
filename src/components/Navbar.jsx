import { Button } from "@ui/button";
import ThemeToggle from "./ThemeToggle";
import { Search, RefreshCcw } from "lucide-react";


export default function Navbar () {
  
  return (
    <header id="header">
      <h1 className="font-ketchup text-3xl">
        Tastemap
        <span className="text-accent">.</span>
      </h1>

      <section>
        <div className="search-container">
          <Search className="size-4" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search your places"
          />
        </div>

        <ThemeToggle />

        <Button
          variant="ghost"
          size="icon"
          className="h-btn"
        >
          <RefreshCcw />
        </Button>

        <button
          className="add-place bg-freshlime"
        >
          <span>+</span>
          Add a place
        </button>
      </section>
    </header>
  );
}