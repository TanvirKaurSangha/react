import React, { useState } from 'react';
import styles from "./detail.module.css"
//import {useLocation} from 'react-router-dom';

const Detail=(props)=>{
 // console.log(props.data.email,"jhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
   // const location = useLocation();
   const[name,setName]=useState("");
   const handleChange=(e)=>{
    setName(e.target.value)
   }
  

   const handleSubmit=(e)=>{
    e.preventDefault();
    props.onSubmitting(name);


   }
 return(<>
<div className='container'>x
<div className='text-center mt-5'>
  <h4>USER DETAILS</h4>
</div>
 <div>
  <table className="table table-dark">
 <thead>
 <tr>
      <th>Username</th>
      <th>Email</th>
      <th>Profession</th>
      
    </tr>
 </thead>
  <tbody>
  <tr>
      <td>{props.data.username}</td>
      <td>{props.data.email}</td>
      <td>{props.data.profession}</td>
    </tr>
  </tbody>
  </table>
  <div>
    <h4> User Form Here</h4>
    <div>
            <form onSubmit = {handleSubmit}>
              <input type="text" value={name} onChange={handleChange}/>
              <button type='submit'>Submit</button>
            
            </form>
        </div>
    
    
    </div>

 </div>
</div>


 </>)
    
}
export default Detail;