import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Orders=()=> {
  const navi = useNavigate();
  const [customersData,setCustomersData] = useState([])
  const [afterdel,setAfterdel] = useState(false);

  useEffect(()=>{
       
  },[afterdel])

    useEffect(()=>{
      const showdata = async()=>{
           const data = await axios.get('http://localhost:4000/customers');
           const response = await data.data;
           setCustomersData(response);

      }
      showdata()
    },[])
  const del = (arg)=>{
    alert(arg)
    axios.delete(`http://localhost:4000/customers/${arg}`).then(()=>{setAfterdel(true)});
    const showdata = async()=>{
      const data = await axios.get('http://localhost:4000/customers');
      const response = await data.data;
      setCustomersData(response);

 }
 showdata()
    
  }
    return(
        <>
        <center><h1><b>Latest Order</b></h1></center>
            <button onClick={()=>{navi("/customers")}} style={{float:"right",marginTop:"-54px", marginRight:"160px"}}>Add Orders</button>
        <table align="center" cellPadding={"20px"} border={"3px"}>
            {customersData.map((e)=>{
                return   <tr style={{display:"flex"}} key={e.id}>
                <td style={{width:"100px"}}>{e.name}</td>
                <td style={{width:"170px"}}>{e.email}</td>
                <td style={{width:"100px"}}>{e.money}</td>
                <td style={{width:"100px"}}>{e.date}</td>
                <td><Link to={`/order/${e.id}`}>Update</Link></td>
                <td onClick={()=>{del(e.id)}}>Delete</td>
                </tr>

            }
            )}
        </table>

        </>
    ) 
}
   export default Orders;
