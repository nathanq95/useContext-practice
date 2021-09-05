import React from 'react';
import { ThemeContext } from './AppComponent.react';

export default class ClassContextComponent extends React.Component {
    /**
     * themeStyles takes in an arg (dark) and returns an object defining the theme
     * styles to be applied in the render function.
     * 
     * If dark is truthy set backgroundColor to #333 (charcoal), else set it to #CCC (silver).
     * 
     * If dark is truthy set color (text) to #CCC, else set it to #333.
     */
    themeStyles(dark) {
        return {
            backgroundColor: dark ? '#333' : '#CCC',
            color: dark ? '#CCC' : '#333',
            padding: '2rem',
            margin: '2rem'
        }
    }

    /**
     * ThemeContext.Consumer: accesses ThemeContext's prop (darkTheme).
     * 
     * {darkTheme => ...}: takes ThemeContext's prop (darkTheme) and calls the themeStyles function.
     *      - The result of this function call will be the styling for the component.
     */
    render() {
        return (
            <ThemeContext.Consumer>
                {darkTheme => <div style={this.themeStyles(darkTheme)}>Class Theme</div>}
            </ThemeContext.Consumer>
        )
    }
}
