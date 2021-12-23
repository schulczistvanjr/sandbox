import React from 'react';
import { DangerButton } from '../Button';

export const UserProfilePage = ({ user, fetchUser }) => {
    return (
        <div>
            <h3>Name: {user.name.first} {user.name.last}</h3>
            <p>Email: {user.email}</p>
            <DangerButton onClick={() => fetchUser()}>Change user data</DangerButton>
        </div>
    );
}