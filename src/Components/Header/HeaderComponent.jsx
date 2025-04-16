import { useState, useEffect } from 'react';

export default function Header() {

  /* Data */
    const Name = "Ricardo Brites";
    const Role = "Gameplay Programmer";
    const Location = "Leiria, Portugal";

    /* Dark Coloring */
    const Dark_PrimarBGColor = 'bg-zinc-600';
    const Dark_PrimaryTextColor = 'text-zinc-600';
    const Dark_SecondaryTextColor = 'text-zinc-500';
    const Dark_PrimaryStrokeColor = 'text-zinc-600';

    const Dark_PrimaryBGHoverColor = 'bg-zinc-500';
    const Dark_SecondaryBorderColor = 'border-zinc-600';


    /* Light Coloring */
    const Light_PrimaryBGColor = 'bg-zinc-200';
    const Light_PrimaryTextColor = 'text-zinc-200';
    

    const Light_PrimaryBGHoverColor = 'bg-zinc-300';
    const Light_PrimaryStrokeColor = 'stroke-zinc-300';
    const Light_SecondaryTextColor = 'text-zinc-300';
    const Light_SecondaryBorderColor = 'border-zinc-300';

    
  // Get initial dark mode state from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark'; // If saved, use that
    // If not saved, fallback to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Effect to apply/remove the dark class on the html tag based on darkMode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');  // Save dark mode in localStorage
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // Save light mode in localStorage
    }
  }, [darkMode]);  // When darkMode changes, update the class and localStorage



  const PrimaryBGColor = darkMode ? Dark_PrimarBGColor : Light_PrimaryBGColor;
  const PrimaryTextColor = !darkMode ? Dark_PrimaryTextColor : Light_PrimaryTextColor; /* Inverted - We want light text on dark BG and vice-versa */
  const SecondaryTextColor = !darkMode ? Dark_SecondaryTextColor : Light_SecondaryTextColor; /* Inverted - We want light text on dark BG and vice-versa */
  const PrimaryHoverColor = darkMode ? Dark_PrimaryBGHoverColor : Light_PrimaryBGHoverColor;
  const SecondaryBorderColor = darkMode ? Dark_SecondaryBorderColor : Light_SecondaryBorderColor;

/* Icons */
const MoonIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className={`size-6 ${Light_PrimaryStrokeColor}`}><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>;  
const SunIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`size-6 ${Dark_PrimaryStrokeColor}`}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>;

  return (
    <header className= {`sticky top-0 ${PrimaryBGColor} backdrop-blur-md border-b ${SecondaryBorderColor} shadow-sm`}>
      <div className="max-w-10xl mx-auto px-4 py-1 flex justify-between items-center">
        <div>
          <a href='/'>
            <h1 className= {`${PrimaryTextColor} text-l font-bold`}>
              {`${Name}`}
            </h1>
            <p className= {`text-xs ${SecondaryTextColor}`}>
              {`${Role}`} · {`${Location}`}
            </p>
          </a>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)} // Toggle dark mode
          className={`p-2 rounded-full ${PrimaryBGColor} hover:${PrimaryHoverColor} transition`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? MoonIcon : SunIcon}
        </button>
      </div>
    </header>
  );
}
