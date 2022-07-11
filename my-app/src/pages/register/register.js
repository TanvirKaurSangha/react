import React from 'react'
import ReactDOM from 'react-dom'

// Import css modules stylesheet as styles
import styles from './register.module.css'
import { useState } from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import Users from '../../local-json/users.json'
import Detail from '../detail/detail'
// import {fs-react} from 'fs-react';

// import * as fs from 'fs';
//import fs from 'fs'

//const fs = require('fs');
var fs = require('browserify-fs')
const Register = () => {
  //console.log(fs,"fffffffffff");
  const [errorMessages, setErrorMessages] = useState({ name: '', message: '' })

  const [disable, setDisable] = useState(false);
  const[userinfo,setUserinfo]=useState([]);
  const professions = ['Developer', 'Designer', 'Other']
  

  const errors = {
    uname: 'User Already exists',
  }

  const getData=(data)=>{

    console.log(data,">>>>>>>>>")
  }

  //  Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className={styles.redText}>{errorMessages.message}</div>
    )

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      pass: '',
      profession: professions[0],
    },
    onSubmit: function (values, { resetForm }) {
      console.log('Form values', values)
    setUserinfo(values);
    
      Users.push(values);
    

      // fs.writeFile('../../local-json/users.json', JSON.stringify(Users), function(err) {
      //   if(err){
      //     console.log("Error",err)
      //   }
      //   else{
      //     console.log(">>>>>>>>><<<<<<<<<")

      //   }

      // });

      // fs.writeFile('./usersj.son', JSON.stringify(Users), function (err) {
      //   if (err) console.log(err)
      //   else console.log('success')
      // })

      //  console.log(Users);
      //     fs.writeFile('../../local-json/users.json', JSON.stringify(Users), (err) => {
      //     console.log("Hello");
      //     if (err) console.log('Error writing file:', err);
      // })
      // console.log(Users)

      // resetForm({values:""});
    },

    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string()
        .email('Please enter the valid email address')
        .required(),
      pass: Yup.string()
        .min(4, 'password must be greater than 4 charachters')
        .required(),
      profession: Yup.string().oneOf(
        professions,
        'The profession you chose does not exist',
      ),
    }),
  })
  // console.log(userinfo,"ttttttttttttttttttttttttttt");
  return (
    <>
      <div className={styles.align}>
        <form onSubmit={formik.handleSubmit}>
          <h4 className="text-center">Registeration Form</h4>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="username"
              className="form-control"
              id="username"
              name="username"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Enter username"
            />
          </div>
          {formik.touched.username && formik.errors.username && (
            <span className={styles.redText}>{formik.errors.username}</span>
          )}

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onBlur={formik.handleBlur}
              onChange={(e) => {
                // console.log(e,">>>>>>>>>>>>>")
                formik.setFieldValue('email', e.target.value)
                const userData = Users.find(
                  (user) => user.email === e.target.value,
                )
                if (userData) {
                  //
                  setErrorMessages({ name: 'email', message: errors.uname })
                  console.log('USER ALTEADY EXISTS')
                  setDisable(true)
                } else {
                  setErrorMessages({ name: '', message: '' })
                  setDisable(false)
                }
              }}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <span className={styles.redText}>{formik.errors.email}</span>
          )}

          {renderErrorMessage('email')}

          <div className="form-group">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              className="form-control"
              id="pass"
              name="pass"
              value={formik.values.pass}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Password"
            />
          </div>
          {formik.touched.pass && formik.errors.pass && (
            <span className={styles.redText}>{formik.errors.pass}</span>
          )}

          <div className="form-group">
            <label htmlFor="profession">Profession</label>
            <select
              name="profession"
              id="profession"
              className="form-select form-select-sm"
              value={formik.values.profession}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            >
              {professions.map((profession, index) => (
                <option value={profession} key={index}>
                  {profession}
                </option>
              ))}
            </select>
          </div>
          {formik.touched.profession && formik.errors.profession && (
            <span className={styles.redText}>{formik.errors.profession}</span>
          )}

          <button type="submit" disabled={disable} className="btn btn-primary">
            Submit
          </button>

         
        </form>
        
      </div>
     <Detail data={userinfo} onSubmitting={getData}/>
    </>
  )
}

export default Register
