import React from 'react'
import Data from './Data'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeee } from '../STORE/Cartslice'
const Cart = () => {

  let namee = useSelector((state)=> state.cart)
  let dishpach = useDispatch()

  let remove = (ssId) =>{
    dishpach(removeee(ssId))
  }
  let totall = namee.reduce((aa,bb)=> aa+bb.price,0)
  return (
    <div>
         <div className="jk"><br /><br /><br /><br /><br /><br />
        <h1 style={{fontSize:"45px", color:"white"}} >Your Cart</h1>
      </div><br /><br /><br />
        <table className='tab' style={{textAlign:"center"}}>
          <thead>
            <tr>
              <th style={{padding:"10px"}} >Image</th>
              <th>Product Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            
            {namee.map((ss)=>{
             
              return(
                <tr>
                  <td><img src={ss.img} alt="" srcset="" style={{height:"60px"}}  /></td>
                  <td>{ss.name}</td>
                  <td>{ss.price}</td>
                  <td>{ss.que}</td>
                  <td>  <Link onClick={()=>remove(ss.id)} > <img src="https://img.icons8.com/?size=80&id=102315&format=png" alt="" srcset="" style={{height:"30px"}} /> </Link> </td>
                </tr>
              )
              
            })}
            
          </tbody>
        </table><br /><br />
        <div>
        <h2 style={{marginLeft:"70px"}} >Subtotal Rs. : <span style={{color:"red"}} >{totall}</span>  </h2> <br />
        <p style={{marginLeft:"70px",fontSize:"16px"}} >Taxes and shipping will calculate at checkout</p><br />
            <Link  to="/foods" >
        <button style={{backgroundColor:"red",  border:"none", borderRadius:"5px", marginLeft:"70px",color:"white"  }} >Continue Shopping </button></Link>
        <Link to="/checkout" >
        <button style={{backgroundColor:"red",  border:"none", borderRadius:"5px", marginLeft:"50px",color:"white"}} >Check Out</button><br /><br />
        </Link>
        </div>
    </div>
  )
}

export default Cart