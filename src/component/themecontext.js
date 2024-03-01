import React, {createContext, useState} from "react";


export const ThemeContext = createContext();

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light'); 
    };
        // this means if theme = light, change to dark, else change to light.
    return(
            <ThemeContext.Provider value={{theme, changeTheme}}>
                {props.children}
            </ThemeContext.Provider>
        )
}