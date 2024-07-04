import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/sidebar/index.jsx';
import Top from './components/top/index.jsx';
import Dashboard from "./pages/dashboard.jsx";
import Products from './pages/products.jsx'
import Customers from "./pages/customers.jsx";
import Orders from "./pages/orders.jsx";
import Analytics from "./pages/analytics.jsx";
import Reviews from "./pages/reviews.jsx";
import Setting from "./pages/setting";
import Registration from "./pages/registration.jsx";
import Login from "./pages/login.jsx";
import { useState } from "react";
import Updateform from "./pages/updateform.jsx";


function App() {
  const [ side , setSide ] =useState(<Sidebar/>)
  const [top , setTop] =useState( <Top/>)

  let a={
    marginLeft:"10px",
  }

  return (
    <>
    <BrowserRouter>
      {side}
      {top}
      
    <Routes>
      <Route path="/" element={<Login props={setSide} props1={setTop} />} />
      <Route path="/registration" element={<Registration props={setSide} props1={setTop} />} />
      <Route path="/Dashboard/:email" element={<Dashboard style={a} />} />
      <Route path="/Dashboard" element={<Dashboard style={a} />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/order/:id" element={<Updateform />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/setting" element={<Setting />} />

    </Routes>
    
    </BrowserRouter>
    

    </>
   
  );
}

export default App;
