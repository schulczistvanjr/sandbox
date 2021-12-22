import React, { useState } from "react";
import { CounterButton } from "../CounterButton";
import { CongratulationMessage } from "../CongratulationMessage";
import { useLocation } from "react-router-dom";
import { parse } from "query-string";

export const CounterButtonPage = () => {
    const location = useLocation();
    // const startingValue = parse(location.search).startingValue;
    const [numberOfClicks, setNumberOfClicks] = useState(0); //useState(Number(startingValue));
    const [hideMessage, setHideMessage] = useState(false);

    const increment = () => { setNumberOfClicks(numberOfClicks + 1); }

    return (
        <>
        <h1>Counter Button Page</h1>
        {hideMessage
        ? null
        : <CongratulationMessage
            numberOfClicks={numberOfClicks}
            threshold={10}
            onHide={() => setHideMessage(true)} />}
        <CounterButton
            onIncrement={increment}
            numberOfClicks={numberOfClicks} />
        </>
  );
}