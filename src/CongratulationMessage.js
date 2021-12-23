import React, { useEffect } from "react";
import { Button } from "./Button";

export const CongratulationMessage = ({ threshold, onHide }) => {
    useEffect(() => {
        return () => console.log("Congrats message onmounted");
    }, []);

    return (
        <>
            <h1>Congratulation! You've reached {threshold} number of clicks!</h1>
            <Button onClick={onHide}>Hide</Button>
        </>
    );
}