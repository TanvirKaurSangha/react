
import React from 'react';
import styles from "./home.module.css"

import { useNavigate } from "react-router-dom";

const Home=()=>
{
  const nav = useNavigate();
  const loginPage=()=>{
    nav("/login")
  }
  const registerPage=()=>{
    nav("/register")
  }
  return <>
<div className={styles.main}>
<div className={styles.content}>
<h1 className='text-center'>Welcome to HomePage</h1>
</div>
  <div className={styles.btnalign}>
    <button type='submit' className="btn btn-primary" onClick={loginPage}>Login</button>
    <button type='submit' className="btn btn-primary" onClick={registerPage}>Register</button>
  </div>
</div>
  </>;
}
 
export default Home;