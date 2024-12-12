import { useState } from "react";
import { useTheme } from "../context/ThemeProvider";

export const ThemmeToggler = () => {

  const {theme, toggleTheme} = useTheme();
  const [isChecked, setIsChecked] = useState(false);
  const positionClass = isChecked ? "translate-x-[20px]" : "translate-x-0";
  const iconClass = theme === "dark" ? "light": "dark";

  const handleChange = () => {
    if (!isChecked) {
      setIsChecked(true);
      toggleTheme("dark");
    }
    else {
      setIsChecked(false);
      toggleTheme("light");
    }
  }

  return (
    <div className="flex gap-2 items-center">
      <img src={`images/icon-sun-${iconClass}.svg`} alt="light mode" />
      <label className="relative inline-block w-12 h-7 bg-purple rounded-full px-1 cursor-pointer">
        <input type="checkbox" checked={isChecked} onChange={handleChange} className="invisible"/>
        <span className={`transition-transform left-1 top-1/2 -translate-y-1/2 absolute bg-pure-white border border-dark-navy/10 w-5 h-5 rounded-full ${positionClass}`}></span>
      </label>
      <img src={`images/icon-moon-${iconClass}.svg`} alt="dark mode" />
    </div>
  )
}
