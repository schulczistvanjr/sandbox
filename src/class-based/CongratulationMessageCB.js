import React from 'react';

expect class CongratulationMessageCB extends React.Component {
    render() {
        const { threshold, onHide } = this.props;
        return (
            <>
                <h1>Congratulation! You've reached {threshold} number of clicks!</h1>
                <button onClick={onHide}>Hide</button>
            </>
        );
    }    
}