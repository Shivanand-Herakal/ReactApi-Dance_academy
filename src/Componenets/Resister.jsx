import React, { useState } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import AxiosInstance from '../AxiosInstance'

const Resister = () => {

    let[signup,setSignup]=useState({
        userName:"",
        email:"",
        password:"",
        phone:"",
        gender:"",
        dob:""
    })
    
    let{userName,email,password,phone,gender,dob}=signup

    let handlechange=(e)=>{
        let{name,value}=e.target;
        setSignup({...signup,[name]:value})
    }
    const handlesubmit=async(event)=>{
        event.preventDefault()
        let payload={userName,email,password,phone,gender,dob}
        AxiosInstance.post("/users/save",payload)
        
    }

  return (
    <div>
        <div>
        
        </div>
   
    <div>
       <fieldset>
        <legend>
            Register
        </legend>
        <form action="">
            <table>
                <tr>
                    <td><label htmlFor="userName">USERNAME</label></td>
                    <td><input type="text"  id='userName' name='userName' value={userName} onChange={handlechange} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="email">EMAIL ADDRESS</label></td>
                    <td><input type="text"  id='email' name='email' value={email} onChange={handlechange}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="password">PASSWORD</label></td>
                    <td><input type="password"  id='password' name='password' value={password} onChange={handlechange}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="phone">PHONE NUMBER</label></td>
                    <td><input type="text"  id='phone' name='phone' value={phone} onChange={handlechange}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="gender">GENDER</label></td>
                    <td><input type="radio"  id='gender'name='gender' value="male" onChange={handlechange}/>MALE<input type="radio"  id='gender' name='gender' value="female" onChange={handlechange}/>FEMALE</td>
                </tr>
                <tr>
                    <td><label htmlFor="dob">DATE OF BIRTH</label></td>
                    <td><input type="date"  id='dob' name='dob' value={dob} onChange={handlechange}/></td>
                </tr>
                <tr>
                    <button onClick={handlesubmit}>SIGN UP</button>
                </tr>
            </table>
        </form>
        <Link >Already have an acccount ?CLICK HERE</Link>
       </fieldset>
    </div>
    </div>
  )
}

export default Resister