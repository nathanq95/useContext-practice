import React, { useContext } from 'react';
import { ThemeContext } from './AppComponent.react';

export default function FunctionContextComponent() {
    /**
     * useContext takes in a context object as its arg. The result of this function call is the 
     * value (darkTheme) passed down in AppComponent.
     * 
     * darkTheme stores the result of useContext(ThemeContext), which in this example is either true or false;
     */
    const darkTheme = useContext(ThemeContext);

    /**
     * if darkTheme is true one value is stored in this object, else another value is stored.
     */
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    /**
     * The styling for this component is defined in the themeStyles object above. The actual styling
     * applied is dependent on the value of darkTheme when its passed down from AppComponent.
     */
    return (
        <div style={themeStyles}>Function Theme</div>
    )
}
