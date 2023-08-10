import React from 'react'
import { Link } from 'react-router-dom'
import AxiosInstance from '../AxiosInstance'
import { useState } from 'react'
const Login = () => {

    let[login,setLogin]=useState({
        userEmail:"",
        password:""

    })

    let {userEmail,password}=login

    let handlechange=(e)=>{
        let{name,value}=e.target;
        setLogin({...login,[name]:value})
    }
    const handlesubmit=async(event)=>{
        event.preventDefault()
        let payload={userEmail,password}
       let data= AxiosInstance.post("/authenticate",payload)
        console.log(data);
        
    }

  return (
   <div>
    <div>
    <fieldset>
        <legend>Login form</legend>
        <form action="">
        <table>
        <tr>
                    <td><label htmlFor="userEmail">EMAIL ADDRESS</label></td>
                    <td><input type="text"  id='userEmail' name='userEmail' value={userEmail} onChange={handlechange}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="password">PASSWORD</label></td>
                    <td><input type="password"  id='password' name='password' value={password} onChange={handlechange}/></td>
                </tr>
                <tr>
                    <button onClick={handlesubmit}>LOG IN </button>
                </tr>
        </table>
        </form>
        <Link>Forgot Password?</Link>
        <Link>Don't Have an Account?</Link>
    </fieldset>
    </div>
    </div>
  )
}

export default Login