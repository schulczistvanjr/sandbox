import React, { useEffect } from "react";
import { DangerButton } from "./Button";

export const CounterButton = ({ onIncrement, numberOfClicks }) => {
    useEffect(() => {
        console.log("useEffect function called");
    }, []);

    return (
        <>
        <p>You clicked the button {numberOfClicks} times</p>
        <DangerButton
        buttonColor={'green'}
        onClick={onIncrement}
        >Click Me!</DangerButton>
        </>
    );
}