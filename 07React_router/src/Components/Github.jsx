import React, { useEffect, useState } from "react";
import { data, useLoaderData } from "react-router";
// import { useLoaderData } from "react-router";

function Github(){
    const Data = useLoaderData();
    // let [Data, setdata] = useState("");
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/Bhavishyakumar2006')
    //     .then((res)=> res.json())
    //     .then((res)=> setdata(res))
    // },[])
    // console.log(Data);
    
    return(
        <div>
            <div className="text-center bg-gray-500 w-3xl mx-auto">
                <p className="text-2xl text-white">Followers: {Data.followers}</p>
                <img className="h-56 mx-auto py-1" src={Data.avatar_url} alt="Github_profile_image" />
            </div>
        </div>
    )
}

export default Github;

export const githubApiData = async () =>  {
    const response = await fetch('https://api.github.com/users/Bhavishyakumar2006');
    return response.json()
};
