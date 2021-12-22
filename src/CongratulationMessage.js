import React, { useEffect } from "react";

export const CongratulationMessage = ({ numberOfClicks, threshold, onHide }) => {
    useEffect(() => {
        return () => console.log("Congrats message onmounted");
    }, []);

    return numberOfClicks >= threshold
        ? <>
            <h1>Congratulation! You've reached {threshold} number of clicks!</h1>
            <button onClick={onHide}>Hide</button>
        </>
        : null
}