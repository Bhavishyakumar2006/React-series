import React from "react";
import { useParams } from "react-router";

function User(){
    const {id} = useParams()
    return(
        <>
            <p className="text-center bg-amber-600 text-2xl text-white">User:{id}</p>
        </>
    )
}

export default User;