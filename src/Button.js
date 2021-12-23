import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props => props.buttonColor || 'transparent'};
    border: 4px solid white;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    margin: 8px;
    outline: none;
    padding: 16px;
`;

export const Button = ({ children, buttonColor, ...props }) => {
    return (
        <StyledButton buttonColor={buttonColor} {...props}>{children}</StyledButton>
    );
}

export const DangerButton = ({ children, ...props }) => {
    return <Button buttonColor='red' {...props}>{children}</Button>;
}

export const SuccessButton = ({ children, ...props }) => {
    return <Button buttonColor='green' {...props}>{children}</Button>;
}

// export class Button extends React.Component {
//     constructor(props) {
//         super(props);
//         this.buttonColor= props.buttonColor;
//     }

//     render () {
//         return(
//             <StyledButton
//                 {...this.props}
//                 buttonColor={this.buttonColor}>
//                 {this.props.children}
//             </StyledButton>
//         );
//     };
// }

// export class DangerButton extends Button {
//     constructor(props) {
//         super(props);
//         this.buttonColor= 'red';
//     }
// }

// export class SuccessButton extends Button {
//     constructor(props) {
//         super(props);
//         this.buttonColor= 'green';
//     }
// }