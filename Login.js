import React from 'react'

import { Link } from 'react-router-dom'



const Login = () => {

  return (

    <div>

       <div className="jk"><br /><br /><br /><br /><br /><br />

        <h1 style={{ fontSize: "45px", color: "white" }} >Login</h1>

      </div><br /><br /><br />



      <div className="ll">

        <input type="email" placeholder='Emal' className='lll'/><br /><br />

        <input type="text" placeholder='Password' className='lll'/><br /><br /><br />

        <button style={{background:'none',border:'none',borderRadius:'5px',backgroundColor:'red',color:'white',marginLeft:'110px'}}>Login</button>

      </div>

      <center> <p style={{fontSize:"20px",marginRight:"45px",textDecoration:'none',color:'black'}}> <Link style={{textDecoration:'none',color:'black'}} to="/signup" >Don't have an account ? Create an account </Link></p></center><br /><br />

    </div>

  )

}



export default Login