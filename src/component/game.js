import React,{useState, useEffect, useContext} from "react";
import {ThemeContext} from "./themecontext";

function Game() {

    const {theme} = useContext(ThemeContext);
    const [level, setLevel] = useState(1);
    const [list, setList] = useState([]);
    const [entered, setEntered] = useState(0);
    const [modeChange, setModeChange] = useState(true);
    const [answer, setAnswer] = useState('?');
    const [d2, setD2] = useState('?');
    const [d1, setD1] = useState('?');
    const [seeAnswer, setSeeAnswer] = useState(false);
    const [seeQuestion, setSeeQuestion] = useState(true);
    
    useEffect(()=>{
        setList(['1', '2', '3','4', '5', '6','7', '8', '9', '10', '11', '12'])
    }, []);


    const handleLevelIncrease = ()=>{
                    setLevel(level+1);
            }
        
    const handleLevelDecrease = ()=>{
                setLevel(level-1);
        }       

    const handleEnteredLevel = ()=>{
            setLevel(entered);
            
    }

    function randomcalculator(){
        const  generated = Math.floor(Math.random()*list.length)
        return generated
    }
    let generatedNumber = randomcalculator();
   const finalAnswer = generatedNumber * level

     const displayquestion =()=>{
        setD2(generatedNumber);
        setD1('?');
        setSeeAnswer(false);
        setSeeQuestion(true);
   }

   const displayAnswer =()=>{
        setAnswer(finalAnswer);
        setSeeAnswer(true);
        setSeeQuestion(false);
   }

   const togglemode = ()=>{
        setModeChange(modeChange===false ?  true : false);
   }


    

    return(
        <div className={`App ${theme}`}>

           {modeChange ? (
            <div1>
                    <h2>LEVEL  {level} !!!</h2>
                <p>
                            {
                                seeQuestion? (
                            <p1>{level} * {generatedNumber} = {d1}</p1>
                                    ):(
                                        <p1></p1>
                                    )
                            
                        }
                         {
                            seeQuestion? (
                                <p></p>
                            ):(
                                <button onClick={displayquestion}>Next question</button>
                            )

                         }
                        <br></br>

                        {
                            seeAnswer? (<p1> The answer is <em>{answer}</em> 👍</p1>
                                                ):(
                                                    <p1></p1>
                                                )
                            
                            
                            } 

                            {
                                seeAnswer? (
                                            <p></p>
                                            ):(
                                <button onClick={displayAnswer}>see Answer</button>
                                            )
                                                    }

                </p>

                <footer>
                    <button onClick={togglemode}> Back to study table </button><br></br>    
                    <button onClick={handleLevelDecrease}> Previous Level </button>
                    <button onClick={handleEnteredLevel}>Go to level </button>
                    <input 
                    type="number" placeholder={level}
                    min={1} 
                    onChange={(e)=> setEntered(e.target.value)}
                    value={entered}
                    />
                                                                
                    <button onClick={handleLevelIncrease}> Next Level </button>
                </footer>

            </div1>
                        


           ):(



            
        <div2>

                    <h2>LEVEL  {level} !!!</h2>

                     {list.map((eachNumber)=>{
                            const multiplier = level * eachNumber
                            return(
                            
                                    <li className="">
                                        {eachNumber} * {level} = {multiplier}
                                    </li>

                            )}
                        )}
            
            
             <footer>
                           <button onClick={togglemode}> Go to game mode </button><br></br>


                        <button onClick={handleLevelDecrease}> Previous Level </button>
                        <button onClick={handleEnteredLevel}>Go to level </button>
                            <input 
                                type="number" 
                                min={1} 
                                onChange={(e)=> setEntered(e.target.value)}
                                value={entered}
                            />

                        <button onClick={handleLevelIncrease}> Next Level </button>

            </footer>

        </div2>)}







      
        </div>
    )
}

export default Game;