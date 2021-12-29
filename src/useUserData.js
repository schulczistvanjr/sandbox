import { useState, useEffect } from "react";

export const useUserData = () => {
    const [user, setUser] = useState({ name: {} });
    
    const fetchUser = async () => {
        const response = await fetch('https://randomuser.me/api');
        const data = await response.json();
        console.log('datafrom useUserData:' + data);
        setUser(data.results[0]);
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return user;
    // return { user, fetchUser };
};