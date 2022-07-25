import React from 'react'
import ReactDOM from 'react-dom'

// Import css modules stylesheet as styles
import styles from './login.module.css'
import { useState } from 'react'
import { Formik, useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

const Login = () => {
  const nav = useNavigate()
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  // User Login info
  const database = [
    {
      username: 'rahul@gmail.com',
      password: '12345',
    },
  ]

  const errors = {
    uname: 'invalid username',
    pass: 'invalid password',
  }

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault()

    var { uname, pass } = document.forms[0]

    // Find user login info
    const userData = database.find((user) => user.username === uname.value)

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: 'pass', message: errors.pass })
      } else {
        setIsSubmitted(true)

        nav('/posts')
      }
    } else {
      // Username not found
      setErrorMessages({ name: 'uname', message: errors.uname })
    }
  }

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className={styles.error}>{errorMessages.message}</div>
    )

  return (
    <>
      <div className={styles.app}>
        <div className={styles.loginForm}>
          {/* <div className={styles.title}>Sign In</div> */}
          {/* {isSubmitted ? <div>User is successfully logged in</div> : renderForm} */}
          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputContainer}>
                <label>Username </label>
                <input type="text" name="uname" required />
                {renderErrorMessage('uname')}
              </div>
              <div className={styles.inputContainer}>
                <label>Password </label>
                <input type="password" name="pass" required />
                {renderErrorMessage('pass')}
              </div>
              <div className={styles.buttonContainer}>
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login
