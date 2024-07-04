import axios from "axios";
import { useState } from "react";
const UpdatePassword=()=>{
    const [input,setInput]=useState("");
    const sid=localStorage.getItem('infoid');

    // const afid=parseInt(dd.id);
    const fetchData=async()=>{
        const response=await axios.get("http://localhost:4000/registration");
        const responseData =await response.data;
        const userToUpdate=responseData.find(user=> user.id===sid);
        if(userToUpdate){
            userToUpdate.pass=input;
            await axios.put(`http://localhost:4000/registration/${sid}`,
            userToUpdate).then(()=>{alert("updated")});
        }
        else{
            console.log(`User with ID ${sid} not found`);
        };
    }
    return(
        <>
        <input type="text" placeholder="enter password" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={fetchData}>Update Password</button>
        </>
    );
}
export default UpdatePassword;