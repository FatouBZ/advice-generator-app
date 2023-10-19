import React, {useState, useEffect} from 'react'
import classes from './Advice.module.css'
import axios from 'axios'

function Advice() {

    const [advices, setAdvices] = useState([])

    const getAdvice = async() => {
        const response = await axios.get('https://api.adviceslip.com/advice')
        const advice = await response.data.slip;
        setAdvices([advice])
    }

    useEffect(() => {
        getAdvice();
       }, []);
   
  return (
    <div className={classes.MainContainer}>
       {advices.map(advice =>
       <div key={advice.id} className={classes.Advice}>

        <h6  className={classes.title}>ADVICE #{advice.id}</h6>
        <p className={classes.quote}>"{advice.advice}"</p>
        <div className={classes.line}>
            <div className={classes.HorizontalLine}></div>
            <i className="fa-solid fa-pause"></i>
            <div className={classes.HorizontalLine}></div>
        </div>
        <div className={classes.buttonSection}>
        <button type='button' onClick={getAdvice}><i className="fa-solid fa-dice-five"></i></button>
      </div>
      </div>
 )} 
      
     
    </div>
  )
}

export default Advice
