import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'




const Navv = () => {

  let names = useSelector((state)=> state.cart)
  let dishpach = useDispatch()
  return (

    <div className='gg'>
     
        <img src="https://react-food-project-five.vercel.app/static/media/res-logo.150c9007ec5a83adf3c4.png" alt="" srcset=""
        style={{height:"80px",paddingLeft:"90px"}}
        />
  <div className="lnk">
      <Link to="/"  className='redbull'  >Home</Link>
      <Link to="foods"  className='redbull'  >Foods</Link>
      <Link to="cart"  className='redbull'  >Cart</Link>
      <Link to="contact"  className='redbull'  >Contact</Link>
      </div>
      <div className="icon"><br />
       <Link  to="cartt" ><FontAwesomeIcon icon={faCartShopping} style={{marginRight:"0px",height:"20"}} /> <span style={{backgroundColor:'red',padding:'1px 5px',borderRadius:'50%',color:'white'}}>{names.length}</span></Link> 
       <Link to="signup" > <FontAwesomeIcon icon={faUserTie} style={{marginRight:"50px",marginLeft:'50px',height:"20"}} /></Link> 
      </div>
    </div>
 
  )
}

export default Navv
