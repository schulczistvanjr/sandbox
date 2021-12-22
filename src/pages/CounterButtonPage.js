import React, { useState } from "react";
import { CounterButton } from "../CounterButton";
import { CongratulationMessage } from "../CongratulationMessage";

export const CounterButtonPage = (/*{ onIncrement, numberOfClicks }*/) => {
    const [numberOfClicks, setNumberOfClicks] = useState(0);
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