import { useState } from "react";

export const ThemmeToggler = () => {

  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => setIsChecked(!isChecked);

  return (
    <div className="flex gap-2">
      <img src="images/icon-sun-dark.svg" alt="light mode" />
      <label htmlFor="toggle-theme" className="flex cursor-pointer select-none items-center" onClick={handleChange}>
        <div className="relative">
          <input type="checkbox" className="sr-only" id="toggle-theme" checked={isChecked} onChange={handleChange}/>
          <div className="block h-8 w-14 rounded-full border border-red bg-dark-navy"></div>
          <div className="dot bg-light-bluish absolute left-1 top-1 h-6 w-6 rounded-full transition"></div>
        </div>
      </label>
      <img src="images/icon-moon-dark.svg" alt="dark mode" />
    </div>
  )
}