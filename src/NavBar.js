import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/counter">Counter Button</Link>
                </li>
                <li>
                    <Link to="/people-list">People List</Link>
                </li>
                {/* <li>
                    <Link to="/forms">Forms</Link>
                </li> */}
                <li>
                    <Link to="/controlled">Controlled form</Link>
                </li>
                <li>
                    <Link to="/uncontrolled">Uncontrolled form</Link>
                </li>
                <li>
                    <Link to="/user">User Profile</Link>
                </li>
            </ul>
    );
}