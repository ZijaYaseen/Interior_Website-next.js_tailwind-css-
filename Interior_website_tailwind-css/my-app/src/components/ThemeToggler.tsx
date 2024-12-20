"use client";

import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button className="rounded-full px-0 w-10 h-10"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {/* Conditionally render Sun or Moon icon based on the current theme */}
         
        
        <MoonIcon className="w-[1.2rem] h-[1.2rem] absolute scale-0 rotate-90 transition-all dark:rotate-0 dark:scale-100" />
  
         <SunIcon className="w-[1.2rem] h-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"/>
      </Button>
    </div>
  );
}

export default ThemeToggler;
