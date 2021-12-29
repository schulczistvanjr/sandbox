import React from 'react';
import { DangerButton } from '../Button';
import { useUserData } from '../useUserData';

export const UserProfilePage = ({ fetchUser }) => {
    const user = useUserData();
    console.log(user);
    console.log(user.name);
    return (
        <div>
            <h3>Name: {user.name.first} {user.name.last}</h3>
            <p>Email: {user.email}</p>
            <DangerButton onClick={() => fetchUser()}>Change user data</DangerButton>
        </div>
    );
}