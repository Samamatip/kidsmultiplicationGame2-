import React, {useContext} from "react";
import { ThemeContext, ThemeProvider } from "./component/themecontext";
import './index.css'
import Game from "./component/game";


function AppThemes(){
    const {theme, changeTheme} = useContext(ThemeContext);

                let identifier;
                if(theme === 'dark'){
                 identifier = 'Light';
                 } else{
                  identifier = 'Dark';
                }
   
    
    return(
            <div className={`App ${theme}`}>
                <tog>
                    {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme 
                

                
                <button className='togglebutton' onClick ={changeTheme}>Change to {identifier} Theme</button>
                </tog>
            </div>
    )
}

function App(){
    return(
        <ThemeProvider>
            
            <AppThemes/>
            <Game />
        </ThemeProvider>
    );
}

export default App;