import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incriment, decriment, removeee } from '../STORE/Cartslice'
import { Link } from 'react-router-dom'




const Cartt = () => {
  let names = useSelector((state) => state.cart)
  let dispatch = useDispatch()

  let incr = (itemId) => {
    dispatch(incriment(itemId))
  }

  let decr = (itemId) => {
    dispatch(decriment(itemId))

  }

  let remove = (itemId) => {
    dispatch(removeee(itemId))
  }

  let total = names.reduce((aa,bb)=> aa+bb.price*bb.que,0)
  return (

    <div>
    <div className='www'>

      <div className='ccc'>

        <img src="https://static.vecteezy.com/system/resources/previews/007/296/873/original/delivery-food-service-concept-courier-in-takeaway-food-with-scooter-illustration-free-vector.jpg" style={{ height: '400px', width: '540px', marginLeft: '230px', marginTop: '110px' }} alt="" />

      </div>



      <div className="mmm">

        {names.length === 0 ? <h3 style={{ textAlign: 'center', marginTop: '40px' }}>No item added to the cart</h3> : ""}
        {names.map((item) => {
          let totl = item.que * item.price
          return (
            <div>
              <div className="mm1">
                <div className="mm2">
                  <img src={item.img} alt="" srcset="" style={{ height: "50px", margin: "10px", marginTop: "25px" }} />

                </div>
                <div className="mm3">
                  <h4 style={{ marginTop: '10px', marginLeft: '30px' }}> {item.name}</h4>

                  <h3 style={{ marginTop: '10px', marginLeft: '30px', color: 'red' }}>Rs.{totl}</h3>
                  <div className="inc">
                    <button style={{ padding: '5px 5px', background: 'none', border: 'none' }}
                      onClick={() => incr(item.id)}
                    >+</button>
                    <h5 style={{ marginLeft: '40px' }}>{item.que}</h5>
                    <button style={{ padding: '5px 5px', background: 'none', border: 'none' }}
                      onClick={() => decr(item.id)}
                    >-</button>
                  </div>

                </div>
                <div className="mm4">
                  <Link onClick={() => remove(item.id)} ><img src="https://img.icons8.com/?size=50&id=46&format=png" style={{ height: '15px', marginTop: '35px' }} alt="" /></Link>
                </div>

              </div>
         
            </div>
          )
        })} 
        

        
        
      </div>
    
    </div>
    <div className="total">
            <h2 style={{margin:'25px'}}>Sub Total : Rs. {total}</h2>
                    <Link to="/checkout" >
            
            <button style={{height:'40px',marginTop:'20px',border:"none",borderRadius:"5px"}}>Check Out</button>
            </Link>
          </div>
    </div>
  )

}



export default Cartt