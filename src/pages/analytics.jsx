
import{CiDollar} from "react-icons/ci";
import{CiShoppingCart} from "react-icons/ci";
import{RiHandbagLine} from "react-icons/ri";
function Analytics(){

   return(
    <>
    <div style={{overflow:"scroll",height:"700px"}}>
        <section id="product">
            <div>
                <ul>
                    <li style={{fontSize:"64px",color:"orangered"}}><CiDollar/></li>
                    <li>Total sales<br></br>{"11222"}</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li style={{fontSize:"64px",color:"orangered"}}><CiShoppingCart/></li>
                    <li>Total order<br></br>{"11222"}</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li style={{fontSize:"64px",color:"orangered"}}><RiHandbagLine/></li>
                    <li>Total products<br></br>{"11222"}</li>
                </ul>
            </div>
            </section>
            <section id="charts">
                <ul>
                    <li style={{background:"rgb(23,4,5)",height:"25px"}}></li>
                    <li style={{background:"rgb(23,4,5)",height:"50px"}}></li>
                    <li style={{background:"rgb(23,4,5)",height:"100px"}}></li>
                    <li style={{background:"rgb(23,4,5)",height:"150px"}}></li>
                    <li style={{background:"rgb(23,4,5)",height:"120px"}}></li>
                    <li style={{background:"rgb(23,4,5)",height:"25px"}}></li>
                    <li style={{background:"rgb(23,4,5)",height:"50px"}}></li>
                    <li style={{background:"rgb(23,4,5)",height:"100px"}}></li>
                    <li style={{background:"rgb(23,4,5)",height:"150px"}}></li>
                    <li style={{background:"rgb(23,4,5)",height:"120px"}}></li>
                    <li style={{background:"rgb(23,4,5)",height:"150px"}}></li>
                    <li style={{background:"rgb(23,4,5)",height:"120px"}}></li>
                </ul>

            </section>
            
            <center><section style={{height:"30px",width:"1050px",background:"black",marginLeft:"20px",
             color:"white"}}>
                Jan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                Feb&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                Mar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                April&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                May&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                Jun&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                Jul&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                Aug&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                Sep&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                Oct&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                Nov&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                Dec
                </section></center>
                <center><h1>Revenue per month</h1></center>
    </div>
    </>
   )
}
export default Analytics;