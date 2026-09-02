import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@ui/button";
import ThemeToggle from "./ThemeToggle";
import { Search, RefreshCcw } from "lucide-react";


export default function Navbar () {
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 })
    tl.from('h1 span', {
      y: -10,
      duration: .6,
      ease: "bounce.inOut",
      repeat: 2,
      yoyo: true,
    })

  }, [])
  
  return (
    <header id="header">
      <h1 className="font-brigom text-3xl logo-text">
        Tastemap
        <span className="text-accent inline-block">
          .
        </span>
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
          aria-label="Refresh places"
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