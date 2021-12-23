import React from 'react';
import { Button } from '../Button';

export const UnControlledFormPage = () => {
    const nameInput = React.createRef();
    const emailInput = React.createRef();
    const favoritColorInput = React.createRef();

    return (
        <form>
            <h3>Please enter your information:</h3>
            <p>Uncontrolled Form</p>
            <div>
            <input
                ref={nameInput}
                type="text"
                placeholder='Name'
                />
            </div>
            <div>
                <input
                ref={emailInput}
                type="text"
                placeholder='Email'
                />
            </div>
            <div>
                <input
                ref={favoritColorInput}
                type="text"
                placeholder='Favorite Color'
                />
            </div>
            <Button onClick={ e => {
                alert(`
                Your name is: ${nameInput.current.value},
                Your email is: ${emailInput.current.value},
                Your favorite color is: ${favoritColorInput.current.value}!
                `);
                e.preventDefault();
            }}>Submit</Button>
        </form>
    );
}