import React from "react";
import userContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setuser] = React.useState('')
    return(
        <userContext.Provider value={{user, setuser}}>
        {children}
        </userContext.Provider> 
    )
}

export default UserContextProvider;