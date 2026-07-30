import React, { useContext, useState } from "react";
import userContext from "../context/UserContext";

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setuser} = useContext(userContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setuser({username, password})
    }
    return(
        <>
        <h1>Login</h1>
        <input type="text" 
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder="username" />
        {" "}
        <input type="text" 
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="password" />
        {" "}
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login;
