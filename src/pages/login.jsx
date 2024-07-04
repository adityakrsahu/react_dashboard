
import '../assets/styles/index.css';
import { NavLink } from 'react-router-dom';
import { FaUser,FaLock } from "react-icons/fa";
import { useContext, useState } from 'react';
import Sidebar from '../components/sidebar';
import Top from '../components/top';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {StateContext} from '../utils/contextLogin/createContext'

const Login = ({ props, props1 }) => {
   const {setToken} = useContext(StateContext);
   localStorage.removeItem('infodata');
   localStorage.removeItem('infostate');


   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');
   const navigate = useNavigate();
      props(false);
      props1(false);
 
   const loggedin = async () => {
   
       const data = await axios.get('http://localhost:4000/registration');
       const users = data.data;
 
       const user = users.find((e) => e.email === email && e.pass === pass);
      
       if (user) {
         setToken(true);
         localStorage.setItem('infodata', JSON.stringify(user))
         localStorage.setItem('infoimg', user.src)
         localStorage.setItem('infoname', user.name)
         localStorage.setItem('infoemail', user.email)
         localStorage.setItem('infoid', user.id)
         
         props(<Sidebar />);
         props1(<Top />);
         navigate(`/dashboard/${user.email}`);
       } else {
         alert('Invalid email or password');
       
     }
   };
   const submit = (event) => {
     event.preventDefault();
     loggedin();
   };
  return (
    <>
    <div className="login">
      <img className="login__bg" src="https://raw.githubusercontent.com/bedimcode/animated-login-form/1b0a04c9d3f47258bd1da07550571c23fadd1327/assets/img/login-bg.png" alt="" />
        <form action=""  onSubmit={submit} className="login__form">
           <h1 className="login__title">Login</h1>

           <div className="login__inputs">
              <div className="login__box">
                
                 <input type="email" placeholder="Email ID" value={email}  name='email' required onChange={(e) => setEmail(e.target.value)}  className="login__input"/>
                 <FaUser className='icon' />
              </div>

              <div className="login__box">
                  
                 <input type="password" placeholder="Password" value={pass} required name='pass' onChange={(e) => setPass(e.target.value)} className="login__input"/>
                 <FaLock className='icon' />
              </div>
           </div>

           <div className="login__check">
              <div className="login__check-box">
                 <input type="checkbox" className="login__check-input" id="user-check"/>
                 <label for="user-check" className="login__check-label">Remember me</label>
              </div>

              <NavLink  to="/" className="login__forgot">Forgot Password?</NavLink>
           </div>

           <button type="submit" onClick={loggedin} className="login__button">Login</button>

           <div className="login__register">
              Don't have an account? <NavLink to='/registration'>Register</NavLink>
           </div>
        </form>
     </div> 
      
    </>
  )
}

export default Login;