// import React, { useState, useEffect } from "react";

// export const UserDataLoader = ({ children }) => {
//     const [user, setUser] = useState({ name: {} });
    
//     const fetchUser = async () => {
//         const response = await fetch('https://randomuser.me/api');
//         const data = await response.json();
//         // console.log(data);
//         setUser(data.results[0]);
//     }

//     useEffect(() => {
//         fetchUser();
//     }, []);

//     return React.Children.map(children, child =>
//         React.cloneElement(child, { user, fetchUser }));
// }

