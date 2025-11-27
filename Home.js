import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger } from '@fortawesome/free-solid-svg-icons'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Data from './Data'
import Dataaaa from './Dataaaa'
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../STORE/Cartslice'
const Home = () => {


  let names = useSelector((state)=> state.cart)
  let dispatch = useDispatch()
  let [item,setItem]=useState(Data)

  let BUTTONS = (val)=>{
      let abcc = Data.filter((ss)=> ss.cat === val)
      setItem(abcc)
  }

  let ADDTOCART = (item)=>{
    let abbb = names.find((ss)=>ss.id === item.id)
    if(!abbb){
    dispatch(add(item))

    }
    else{
      alert("item all ready Added")
    }
  }
  
  return (


 




    <div >
    <div className="main1">
      
      <div className='aa' >
        <br /><br /><br /><br />
        <h1>Easy way to make an order</h1><br />
        <h1 style={{ fontSize: "45px" }} > <span style={{ color: "red" }}>HUNGRY? </span>  Just wait</h1>
        <h1 style={{ fontSize: "45px" }} >food at <span style={{ color: "red" }}> your door</span> </h1><br />
        <p style={{ fontSize: "17px" }} >Welcome to Fresh Bites, your ultimate destination for delicious and fresh online food <br /> ordering!</p><br /><br />
        <button   style={{backgroundColor:"red", color:"white",padding:"10px 35px", border:"none"}}>Order Now</button>
        <button style={{ background: "none", border: "1px solid brown" }} >See All Product</button>

      </div>
      <div className="bb">
        <img src="https://react-food-project-five.vercel.app/static/media/hero.e3ef74be66b8a37b4de8.png" style={{ height: "600px" }} alt="" srcset="" />
        
      </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <div className="drinks">
          <div className="a1">
              <div className="try">
                <div className="f1">
              <FontAwesomeIcon icon={faBurger} style={{height:"65px",marginTop:"26px",marginLeft:"25px"}}/>  
              </div>
              <div className="f2">
              <h3 style={{marginLeft:"115px",marginTop:"50px"}} >Fats Food</h3>
              </div>
              </div>
          </div>
          <div className="a2">
             <div className="s2">
              <div className="try">
                <div className="f1">
              <FontAwesomeIcon icon={faPizzaSlice}  style={{height:"65px",marginTop:"26px",marginLeft:"25px"}}/>  
              </div>
              <div className="f2">
              <h3 style={{marginLeft:"115px",marginTop:"50px"}} >Pizza</h3>
              </div>
              </div>
          </div>
          </div>
          <div className="a3">
             <div className="s3">
              <div className="try">
                <div className="f1">
              <FontAwesomeIcon icon={faUtensils} style={{height:"65px",marginTop:"26px",marginLeft:"25px"}}/>  
              </div>
              <div className="f2">
              <h3 style={{marginLeft:"115px",marginTop:"50px"}} >Asian Food</h3>
              </div>
              </div>
          </div>
          </div>
          <div className="a4">
             <div className="s4">
              <div className="try">
                <div className="f1">
             <FontAwesomeIcon icon={faWineGlassEmpty}  style={{height:"65px",marginTop:"26px",marginLeft:"25px"}}/>  
              </div>
              <div className="f2">
              <h3 style={{marginLeft:"115px",marginTop:"50px"}} >Cold Drink</h3>
              </div>
              </div>
          </div>
          </div>
      </div>
      <br /><br /><br />

      <div className="what">
        <h2 style={{color:'red'}}>What we serve</h2><br />
        <h1>Just sit back at home <br />
we will <span style={{color:'red'}}> take care </span></h1><br />
<p>At Fresh Bites, we serve a delectable array of dishes crafted with care and made with the freshest ingredients. <br />
From wholesome salads to savory entrees and delightful desserts, there's something to satisfy every craving.</p>
      </div>
      <div className="quick">
        <div className="q1" >    
            <img src="https://img.icons8.com/?size=48&id=lxxwrZV7q7Yr&format=png" style={{marginLeft:'50px',height:'80px'}} alt="" />
      <h2 style={{marginLeft:'50px'}}>Quick Delivery</h2>
      <p>Experience lightning-fast delivery <br /> with Fresh Bites, ensuring your <br /> meal arrives swiftly to your <br /> doorstep.</p>
        </div>
        <div className="q2">    
            <img src="https://img.icons8.com/?size=80&id=aRur5n7lHWiL&format=png" style={{marginLeft:'50px'}} alt="" />
            <h2 style={{marginLeft:'50px'}}>Super Dine In</h2>
            <p>Experience the ultimate dining <br /> convenience with Super Dine In, <br />  where delicious meals are just a <br /> click away.</p>
        </div>
        <div className="q2">    
            <img src="https://img.icons8.com/?size=80&id=yR5M5hqtpsJr&format=png" style={{marginLeft:'50px'}} alt="" />
            <h2 style={{marginLeft:'50px'}}>Easy Pick Up</h2>
            <p>Enjoy the convenience of easy pick-<br />up options, making your Fresh Bites <br /> experience even more seamless.</p>
        </div>

      </div>

        <h1 style={{textAlign:"center", fontSize:"45px"}}>Popular Food</h1><br /><br />
        <div className='navv' style={{marginTop:"5px"}} ><br />
            <button className='qq' onClick={()=>setItem(Data)}>All</button>
            <button className='qq' onClick={()=>BUTTONS("Burger")}> <img src="https://img.icons8.com/?size=96&id=erEevcUCwAMR&format=png" alt="" srcset="" style={{height:"25px"}} /> Burger</button>
            <button className='qq' onClick={()=>BUTTONS("Pizza")}>
               <img src="https://img.icons8.com/?size=120&id=0Om9QRgFH4ZX&format=png" alt="" srcset="" style={{height:"25px"}} /> 
              Pizza</button>
            <button className='qq' onClick={()=>BUTTONS("Snacks")}>
               <img src="https://img.icons8.com/?size=96&id=9aT1DSstmQhG&format=png" alt="" srcset="" style={{height:"25px"}} /> 
              Snacks</button>
            <button className='qq' onClick={()=>BUTTONS("Drink")}>
               <img src="https://img.icons8.com/?size=96&id=bcVyoIxvSOFz&format=png" alt="" srcset="" style={{height:"25px"}} /> 
              Drink</button>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"250px 250px 250px 250px",justifyContent:"center",textAlign:"center",alignItems:"center", gap:"40px", marginTop:"40px"}} > 
          {item.map((item)=>{
            return(
              <div style={{border:"1px solid pink",boxSizing:"border-box",padding:"35px",borderRadius:"5px",height:"320px"}} >
                <div  style={{height:"160px"}}>
                <img src={item.img} alt="" srcset="" className='finalll'   /> 
                 <br /><br /></div>
                 <div  style={{height:"140px"}} >                
                  <h3>{item.name.slice(0,17)} <br /></h3><br />
                <h3 style={{float:"left",color:"red"}} > Rs.{item.price}</h3>
                <button style={{padding:"10px 18px",borderRadius:"6px"}} className='z'
                onClick={()=>ADDTOCART(item)}
                >Add To Cart</button>
                </div>

              </div>
            )
          })}
        </div>
            <br /><br /><br />
          <div className="main3">
              <div className="uu">
                  <img src="https://react-food-project-five.vercel.app/static/media/location.c2a808618ecbf53c92bc.png" alt="" srcset="" style={{height:"600px"}} />
              </div>
              <div className="pp"><br /><br />
                <h1 style={{fontSize:"40px",color:"red"}} >Why Fresh Bites?</h1><br />
                <p  style={{fontSize:"19px"}} >At Fresh Bites, we're not just a food service — we're a culinary journey. Discover the unparalleled freshness and taste that sets us apart. From farm-fresh ingredients to expertly crafted dishes, every bite is an experience worth savoring.</p><br /><br />  
              
                <p style={{fontSize:"19px"}}>   <FontAwesomeIcon icon={faCircleCheck} /> Fresh and tasty foods</p><br />
                <p style={{fontSize:"19px"}}> Indulge in a world of fresh and tasty foods meticulously prepared by our talented chefs. Each dish is a masterpiece of flavor, showcasing the finest ingredients and culinary expertise.</p><br />

                <p style={{fontSize:"19px"}}>   <FontAwesomeIcon icon={faCircleCheck} /> Fresh and tasty foods</p><br />
                <p style={{fontSize:"19px"}}> Indulge in a world of fresh and tasty foods meticulously prepared by our talented chefs. Each dish is a masterpiece of flavor, showcasing the finest ingredients and culinary expertise.</p>
              </div>
          </div>

            <br /><br /><br /><br /><br /><br />
                  <h1 style={{textAlign:"center", fontSize:"45px"}} > Hot Pizza</h1><br /><br />
                 <div style={{display:"grid",gridTemplateColumns:"250px 250px 250px 250px",justifyContent:"center",textAlign:"center",alignItems:"center", gap:"40px", marginTop:"40px"}} > 
          {Dataaaa.map((item)=>{
            return(
              <div style={{border:"1px solid pink",boxSizing:"border-box",padding:"35px",borderRadius:"5px"}} >
               
                <img src={item.img} alt="" srcset=""  style={{height:"160px"}} />  <br /><br />
                <h3>{item.name.slice(0,17)} <br /></h3><br />
                <h3 style={{float:"left",color:"red"}} > Rs.{item.price}</h3>
                <button style={{padding:"10px 18px",borderRadius:"6px"}} className='z'
                onClick={()=>ADDTOCART(item)}
                >Add To Cart</button>
              </div>
            )
          })}
        </div>
          <br /><br /><br /><br /><br /><br />
        <div className="testi">
        <div className="custo">
          <h3 style={{color:'red' ,marginLeft:'50px'}}>Testimonial</h3><br /><br />
          <h1>What our <span style={{color:'red'}}> customers </span>are saying</h1><br /><br />
          <p style={{fontSize:'19px'}}>Fresh Bites truly lives up to its name! Every bite bursts with freshness and flavor. From the crisp salads to the hearty sandwiches, each dish is a delightful journey for the taste buds.</p><br /><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores earum vel est sed error molestiae placeat accusamus praesentium dolor inventore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, corporis!</p>
        </div>
        <div className="img">
          <img src="https://react-food-project-five.vercel.app/static/media/network.7deb539d0303413c1704.png" style={{height:'500px'}} alt="" />
        </div>
      </div>

    </div>
  

  

  )
}

export default Home
