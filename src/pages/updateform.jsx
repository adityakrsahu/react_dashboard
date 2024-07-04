// import axios from "axios";
// import { useEffect,useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// const Updateform=()=>{
//     let {id}=useParams();
//     let navi=useNavigate();
//     let [input,setInput]=useState({
//         "name":'',
//         "email":'',
//         "money":'',
//         "status":'',
//         "date":'',
//         "month":''
//     })

// useEffect(()=>{},[input])
// const handleInput=(e)=>{
//     let name=e.target.name;
//     let value=e.target.value;
//     setInput({...input,[name]:value})
// }
// const reg = () => {
//     axios.post(`http://localhost:4000/customers${id}`,input)
//         .then(() => {
//             alert("Submitted");
//             setInput({
//                 "name": '',
//                 "email": '',
//                 "money": '',
//                 "date": '',
//                 "month": '',
//             });
//             navi("/orders");
//         })
//         .catch(error => {
//             console.error("Error updating customer:", error);
//         });
// };
// return(
//     <>
//     <center>
//         <section>
//             <div id='login1'>
//                 <h1>Update Form</h1>
//                 <input type='text'  name='name' value={input.name} placeholder='User name' onChange={handleInput}></input><br></br>
//                 <input type='text'  name='email' value={input.email} placeholder='Email ID' onChange={handleInput}></input><br></br>
//                 <input type='text'  name='money' value={input.money} placeholder='Enter money' onChange={handleInput}></input><br></br>
//                 {/* <input type='text'  name='status' value={input.status} placeholder='Enter status' onChange={handleInput}></input><br></br> */}
//                     <select name='status' onChange={handleInput} value={input.status}>
//                             <option value="select">Select a product status</option>
//                             <option value="booked">Booked</option>
//                             <option value="delivered">Delivered</option>
//                             <option value="on delivery">On delivery</option>
//                     </select>  <br/><br/> 
    
//                 <input type="Datetime-local"  name='date' value={input.date} placeholder="Enter date" onChange={handleInput}></input><br></br>
//                 <input type="month"  name='month' value={input.month} placeholder="Enter month" onChange={handleInput}></input><br></br>

//                     <button onClick={reg}>Login</button>
//             </div>
//         </section>
//     </center>
//     </>
// );
// }

// export default Updateform;


// // import axios from "axios";
// // import { useEffect, useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";

// // const Updateform = () => {
// //     let { id } = useParams();
// //     let navigate = useNavigate(); 
// //     let [input, setInput] = useState({
// //         name: '',
// //         email: '',
// //         money: '',
// //         status: '',
// //         date: '',
// //         month: ''
// //     });

// //     useEffect(() => {
// //         // Add any side effects related to input changes here if needed
// //     }, [input]);

// //     const handleInput = (e) => {
// //         let name = e.target.name;
// //         let value = e.target.value;
// //         setInput({ ...input, [name]: value });
// //     };

// //     const reg = () => {
// //         axios.post(`http://localhost:4000/customers/${id}`, input)
// //             .then(() => {
// //                 alert("Submitted");
// //                 setInput({
// //                     name: '',
// //                     email: '',
// //                     money: '',
// //                     date: '',
// //                     month: '',
// //                 });
// //                 navigate("/orders");
// //             })
// //             .catch(error => {
// //                 console.error("Error updating customer:", error);
// //             });
// //     };

// //     return (
// //         <>
// //             <div style={{ textAlign: 'center' }}>
// //                 <h1>Update Form</h1>
// //                 <input type='text' name='name' value={input.name} placeholder='User name' onChange={handleInput} /><br />
// //                 <input type='text' name='email' value={input.email} placeholder='Email ID' onChange={handleInput} /><br />
// //                 <input type='text' name='money' value={input.money} placeholder='Enter money' onChange={handleInput} /><br />
// //                 <select name='status' onChange={handleInput} value={input.status}>
// //                     <option value="select">Select a product status</option>
// //                     <option value="booked">Booked</option>
// //                     <option value="delivered">Delivered</option>
// //                     <option value="on delivery">On delivery</option>
// //                 </select><br /><br />
// //                 <input type="datetime-local" name='date' value={input.date} placeholder="Enter date" onChange={handleInput} /><br />
// //                 <input type="month" name='month' value={input.month} placeholder="Enter month" onChange={handleInput} /><br />
// //                 <button onClick={reg}>Update</button>
// //             </div>
// //         </>
// //     );
// // }

// // export default Updateform;




import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const UpdateForm = ()=>{
    let {id} = useParams();
  

   let navi = useNavigate();  
 

    let [input,setInput] = useState({
            "name":'',
            "email":'',
            "money":'',
            "status":'',
            "date":'',
            "month":''
          }
            )

            useEffect(()=>{},[input])

    const handleInput = (e)=>{
           let name  = e.target.name;
           let value = e.target.value;
           setInput({...input,[name]:value})
    }  
    
    const reg = ()=>{
      axios.put(`http://localhost:4000/customers/${id}`,input).then(()=>{alert("submitted")}).then(()=>{setInput({
        "name":'',
        "email":'',
        "money":'',
        "status":'',
        "date":'',
        "month":''
      })}).then(()=>{navi("/orders")})
    }
    
    return(
        <>
        <center>
            <section>
                   
                   <div id='login1'>
                   <h1> Update Form </h1>

                   <input type='text' name='name' value={input.name} placeholder='Enter User Name' onChange={handleInput}></input><br></br>

                   <input type='text' name='email' value={input.email} placeholder='Email ID' onChange={handleInput}></input><br></br>

                   <input type='text' name='money' value={input.money} placeholder='Enter Price' onChange={handleInput}></input><br></br>

                   <select name='status' onChange={handleInput}>
                    <option >select a product status</option>
                    <option value={"booked"}> Booked </option>
                    <option value={"delivered"}> Delivered </option>
                    <option value={"on delivery"}> On delivery</option>
                    </select><br></br>

                   <input type="Datetime-local" name='date' value={input.date} placeholder='Enter Date' onChange={handleInput}/><br></br>

                   <input type="month" name='month' value={input.month} placeholder='Enter Month' onChange={handleInput}/><br></br>

                   <button onClick={reg}> Update Details </button>

                   </div>
            </section>
            </center>
        </>
    )
}
export default UpdateForm;