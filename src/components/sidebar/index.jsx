
import React, { useContext, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../../assets/styles/index.css';
import { StateContext } from '../../utils/contextLogin/createContext';

const Sidebar = () => {
    let information=localStorage.getItem('infoimg');
    let aaa = localStorage.getItem('infostate')
    const { token } = useContext(StateContext);
    const nav = useNavigate();

    useEffect(() => {
        if (token || aaa) {

        }
        else{
            nav("/");
        }
    }, [token, nav]);


  return (
    <>
        <aside id='sidebar'>        
                <ul>
                    <li><img className='logo' src={information} width={"150px"} alt=".."></img></li>
                    <li style={{marginTop:"-100px"}}><Link to='/' style={{display:"none"}}>Login</Link> </li>
                    <li><Link to='/registration' style={{display:"none"}} >Registration</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/products'>products</Link></li>
                    <li><Link to='/orders'>Orders</Link></li>
                    <li style={{display:"none"}}><Link to="orders/:id" >Dashboard</Link></li>
                    <li><Link to='/customers'>Customers</Link></li>
                    <li><Link to='/analytics'>Analytics</Link></li>
                    <li><Link to='/reviews'>Reviews</Link></li>
                    <li><Link to='/setting'>Setting</Link></li>
                </ul>
            <Outlet/>
        </aside>     
    </>
  )
}

export default Sidebar;
