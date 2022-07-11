import React from 'react';
import ReactDOM from 'react-dom';

// Import css modules stylesheet as styles
import styles from './login.module.css'; 
import  { useState } from 'react';
import { Formik, useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import Users from "../../local-json/users.json"


const Login = () => {
  const nav = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [disable, setDisable] = useState(false);
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  // Generate JSX code for error message
const renderErrorMessage = (name) =>
name === errorMessages.name && (
  <div className={styles.redText}>{errorMessages.message}</div>
);
  
  const formik = useFormik({
    initialValues: {
     email: '',
     pass:""
    },
    onSubmit: function (values) {
      console.log("Form values",values);
      const userData=Users.find((user) => user.email === formik.values.email);
      if (userData) {
        console.log("Username exists")
        if (userData.pass!== formik.values.pass) {
         
          // Invalid password
         console.log("INVALID PASSWORD")
         setErrorMessages({ name: "pass", message: errors.pass });
         setDisable(true);
        }
        else {
          setErrorMessages({ name: "", message: "" });
         console.log("VALID USER");
        //  nav("/detail",{state:values})
    
        }
      } 
      else {
        // Username not found
        setErrorMessages({ name: "email", message: errors.uname });
       console.log("USER NOT FOUND");
       setDisable(true);
      }
      
    },
    validationSchema: Yup.object({
     
      email: Yup.string()
              .email("Please enter the valid email address")
              .required(),
      pass: Yup.string()
      .min(4, 'password must be greater than 4 charachters')
      .required(),
    
    })
  })
  
  
    return <>
<div className={styles.align}>
<form onSubmit={formik.handleSubmit}>
    <h4 className='text-center'>Login Here</h4>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name='email'  value={formik.values.email}  onBlur={formik.handleBlur} onChange={formik.handleChange} aria-describedby="emailHelp" placeholder="Enter email"/>
   
  </div>
  {formik.touched.email && formik.errors.email && (
            <span className={styles.redText}>{formik.errors.email}</span>
          )}
           {renderErrorMessage("email")}
  <div className="form-group">
    <label htmlFor="pass">Password</label>
    <input type="password" className="form-control" id="pass" name='pass' value={formik.values.pass}  onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder="Password"/>
  </div>
  {formik.touched.pass && formik.errors.pass && (
            <span className={styles.redText}>{formik.errors.pass}</span>
          )}
           {renderErrorMessage("pass")}
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>

    </>
}

export default Login