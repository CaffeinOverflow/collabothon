import React, { useState } from 'react';

function DropdownMenu({ style, options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div 
        onMouseEnter={() => setIsOpen(!isOpen)}
        onMouseLeave={() => setIsOpen(!isOpen)}
        style={style}
        className="dropdown-button"
    >
        <div>
            <button 
                id="dropdownHoverButton" 
                data-dropdown-toggle="dropdownHover" 
                data-dropdown-trigger="hover" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                type="button"
            >
            {selectedOption || 'Select an option'}
            <svg    
                class="w-2.5 h-2.5 ml-2.5" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 10 6"
            >        
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
            </button>
            <i className={`arrow ${isOpen ? 'up' : 'down'}`}></i>
        </div>
    {isOpen && (
        <div 
            className="py-2 text-sm text-gray-700 dark:text-gray-200" 
            aria-labelledby="dropdownHoverButton">
        <ul 
            className="py-2 text-sm text-gray-700 dark:text-gray-200" 
            aria-labelledby="dropdownHoverButton"
        >
        {options.map((option) => (
            <li
            key={option}
            onClick={() => handleOptionClick(option)}
            >
                <a 
                href="#" 
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                {option}
                </a>
            </li>
        ))}
        </ul>
        </div>
    )}
    </div>
  );
}

export default DropdownMenu;