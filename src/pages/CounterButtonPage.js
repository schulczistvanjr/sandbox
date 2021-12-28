import React, { useState, useEffect } from "react";
import { CounterButton } from "../CounterButton";
import { CongratulationMessage } from "../CongratulationMessage";
import { DisplayIf } from "../DisplayIf";
import { DangerButton } from "../Button";

export const CounterButtonPage = () => {
    const [numberOfClicks, setNumberOfClicks] = useState(Number(localStorage.getItem("numberOfClicks")) || 0);
    const [hideMessage, setHideMessage] = useState(false);
    
    useEffect(() => {        
        localStorage.setItem("numberOfClicks", numberOfClicks);
    }, [numberOfClicks]);

    const increment = () => { 
        setNumberOfClicks(numberOfClicks + 1); 
    }

    const resetClickCount = () => {
        setNumberOfClicks(0);
        setHideMessage(false);
    } 

    return (
        <>
        <h1>Counter Button Page</h1>
        <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
            <CongratulationMessage
                threshold={10}
                onHide={() => setHideMessage(true)} />    
        </DisplayIf>
        <CounterButton
            onIncrement={increment}
            numberOfClicks={numberOfClicks} />
        <DangerButton
            onClick={resetClickCount}
        >Reset</DangerButton>
        </>
  );
}