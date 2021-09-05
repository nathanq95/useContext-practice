import React, { useState } from 'react';
import FunctionContextComponent from './FunctionContextComponent.react';
import ClassContextComponent from './ClassContextComponent.react';

/**
 * React.createContext creates a context and stores it in ThemeContext.
 * 
 * ThemeContext is then immediately exported so that it can be used in the rest of the application.
 */
export const ThemeContext = React.createContext();

export default function AppComponent() {
    // darkTheme: a boolean that's toggeled to enable/disable the dark theme.
    const [darkTheme, setDarkTheme] = useState(true);

    const toggleTheme = () => {
        // toggles the dark theme between enabled & disabled.
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    };

    /**
     * ThemeContext.Provider: provides access to its value prop for all contained chilren.
     * 
     * <button></button> when clicked enables & disables darkTheme.
     *      - a child of ThemeContext.Provider.
     * 
     * FunctionContextComponent & ClassContextComponent does the same thing as this component,
     * however, they accomplish it in very different ways through a function & class approach.
     *      - children of ThemeContext.Provider.
     */
    return (
        <>
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <FunctionContextComponent />
                <ClassContextComponent />
            </ThemeContext.Provider>
        </>
    );
};
