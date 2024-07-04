import axios from "axios";
import React from 'react';
import '../assets/styles/index.css';
import { useState , useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUser,FaLock,FaPhotoVideo } from "react-icons/fa";


const Registration = ({props,props1}) => {
let navi = useNavigate();
  props(false);
  props1("");

   const [name, setName] = useState("");
   const [src, setSrc] = useState("");
   const [mobile, setMobile] = useState("");
   const [email, setEmail] = useState("");
   const [pass, setPass] = useState("");

   useEffect(() => {
      const check = async () => {
        
         const store = await axios.get('http://localhost:4000/registration');
         const response = store.data;
         const emailExists = response.some(e => e.email === email);
  
         if (emailExists) {
            alert('Email already exists. Please use a different email.');
         }
      
      }
      if (email) {
        check();
      }
    }, [email]);
  

   let obj ={
      'name' :name,
      'src':src,
      'mobile':mobile,
      'email':email,
      'pass':pass,
   }
const sub = ()=>{
   axios.post('http://localhost:4000/registration',obj)
   .then(() => {
      setName("");
      setSrc("");
      setMobile("");
      setPass("");
      setEmail("");
      alert("Registration successful!");
      navi("/");
    })
      .catch(error => {
         console.error('Error submitting registration:', error);
       });
}

  return (
    <>
     <div className="login">
        <img className="login__bg" src="https://raw.githubusercontent.com/bedimcode/animated-login-form/1b0a04c9d3f47258bd1da07550571c23fadd1327/assets/img/login-bg.png" alt="" />
        <div  className="login__form1">
           <h1 className="login__title1">Registration</h1>

           <div className="login__inputs">
              <div className="login__box">
                <input type="text" placeholder="NAME"  value={name} onChange={(e)=>{setName(e.target.value)}} required className="login__input"/>
                <FaUser className='icon' />
             </div>

             <div className="login__box">
                <input type="email" placeholder="Email ID"  value={email} onChange={(e)=>{setEmail(e.target.value)}}  required className="login__input"/>
                <i className="ri-mail-fill"></i>
             </div>
             <div className="login__box">
                <input type="img" placeholder="Mobile" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}  required className="login__input"/>
                <FaPhotoVideo />
             </div>
             <div className="login__box">
                <input type="img" placeholder="IMG URL" value={src} onChange={(e)=>{setSrc(e.target.value)}}  required className="login__input"/>
                <FaPhotoVideo />
             </div>

              <div className="login__box">
                 <input type="password" placeholder="Password" value={pass} onChange={(e)=>{setPass(e.target.value)}} required className="login__input"/>
                 <FaLock />
              </div>
           </div>

           <div className="login__check">
              <div className="login__check-box">
                 <input type="checkbox" className="login__check-input" id="user-check"/>
                 <label for="user-check" className="login__check-label">Remember me</label>
              </div>
           </div>
           <button type="submit" onClick={sub}  className="login__button">Register</button>
           <div className="login__register">
              Don't have an login? <NavLink to='/'>Login Page</NavLink>
            </div>
        </div>
        
     </div> 
    
    </>
  )
}

export default Registration;