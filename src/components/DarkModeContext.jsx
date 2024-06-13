import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context
const DarkModeContext = createContext();

// Custom hook to use the DarkModeContext
export const useDarkMode = () => useContext(DarkModeContext);

// Provider component
export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
