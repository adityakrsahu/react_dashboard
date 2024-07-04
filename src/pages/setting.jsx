
import { useNavigate } from 'react-router-dom';
import UpdatePassword from "./updatepassword";
import { useState } from "react";
import "../assets/styles/index.css"

const Setting = () => {
  const[passup,setPassup]=useState(false)
 
  const navig = useNavigate();

  const logout = () => {
    navig("/");
  };
  const ppp=()=>{
    setPassup(<UpdatePassword/>)
  }

  return (
    <>
      <button className='logb1' onClick={logout}>logout</button>
      <button className='logb1' onClick={ppp}>Update password</button>
      {passup}
    </>
  );
};

export default Setting;