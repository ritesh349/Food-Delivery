import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div>
         <div>
       <div className="jk"><br /><br /><br /><br /><br /><br />
        <h1 style={{fontSize:"45px", color:"white"}} >Signup</h1>
      </div>
        <br /><br />
      <div className="bacho">
        <input type="text" placeholder='Enter Your Name' className='ii'/>
        <input type="text" placeholder='Enter Your Email' className='ii'/>
        <input type="text" placeholder='Enter Your Phone No.' className='ii'/><br /><br /><br />
      <center>  <button  style={{backgroundColor:"red",border:"none",color:"white",padding:"10px 25px", borderRadius:"5px",alignItems:"center",marginRight:"45px"}}>Sign Up</button> 
      </center>
      </div><br />
     <center> <p style={{fontSize:"20px",marginRight:"45px"}}> <Link style={{ textDecoration:"none", color:"black"}} to="/login" >Already have an account ? Login</Link></p></center><br /><br />

    </div>
    </div>
  )
}

export default Signup
