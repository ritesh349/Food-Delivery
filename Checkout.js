import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Checkout = () => {

    let names = useSelector((state)=> state.cart)

    let dispatch = useDispatch()



    let total = names.reduce((aa,bb)=> aa+bb.price*bb.que,0)



    let final = total+50
  return (
    <div>
       <div className="jk"><br /><br /><br /><br /><br /><br />
        <h1 style={{fontSize:"45px", color:"white"}} >Checkout</h1>
      </div>
      <div className="po">
        <div className="ty1"><br />

            <h2 style={{marginLeft:"20px"}}>Shipping Address</h2>
            <br />

            <input type="text"  placeholder='Enter Your Name'  className='fff' /><br /><br />
            <input type="text"  placeholder='Enter Your Email'  className='fff' /><br /><br />
            <input type="text"  placeholder='Phone Number'  className='fff' /><br /><br />
            <input type="text"  placeholder='Country'  className='fff' /><br /><br />
            <input type="text"  placeholder='City'  className='fff' /><br /> <br />
            <input type="text"  placeholder='Postal code'  className='fff' /><br /><br />
            <button style={{backgroundClip:"red",border:"none",borderRadius:"5px",backgroundColor:"red",color:"white"}} >Payment</button>
        </div>
        <div className="ty2">
            <div className="pink">
             <div className="sub">
                    <h3>subtotal:</h3>
                    <h3>{total}</h3>
                </div> <br />
                <div className="sub2">
                    <h3>Shipping:</h3>
                    <h3>50</h3>
                    
                </div><br />    

                <hr /><br />
                <div className="sub1">
                    <h3>Total:</h3>
                    <h3>{final}</h3>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
