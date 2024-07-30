import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const [data, setdata] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Usama-mehboob")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("data", data);
//         setdata(data);
//       });
//   }, []);
  return (
    <div className="text-center bg-gray-600 text-white m-4 p-4 ">
      Github Profile Name :  {data.name}
      <img src={data.avatar_url} width={300} alt="Git Picture" />
    </div>
  );
}

export default Github;

export const gitHubLoaderInfo = async() =>{
 const response = await fetch ("https://api.github.com/users/Usama-mehboob")
 return response.json()
}