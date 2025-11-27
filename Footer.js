import React from 'react'

const Footer = () => {
  return (
    <div className='foot'>
      <div className="fresh">
        <div className="fr1">
            <h3 style={{marginLeft:'50px'}}>Fresh Bites</h3><br />
            <p style={{lineHeight:'30px'}}>Welcome to Fresh Bites, your ultimate  destination for delicious and fresh  online food ordering!  </p>
        </div>
        <div className="fr2">
            <h3 style={{marginLeft:'50px'}}>Delivery Time</h3><br />
            <h4 style={{marginLeft:'50px'}}>Monday - Friday</h4><br />
            <p>10:00am - 11:00pm</p><br />

            <h4 style={{marginLeft:'50px'}}>Saturday - Sunday</h4><br />
            <p>Full Day</p>
        </div>
        <div className="fr3">
            <h3>Contact</h3><br />
            <h4>Location: Sola, Ahmedabad</h4><br />
            <h4>Phone: 8511755852</h4><br />
            <h5>Email: divy2332gj2@gmail.com</h5>
        </div>
        <div className="fr4">
            <h3 style={{marginLeft:'50px'}}>Newsletter</h3><br />
            <p>Subscribe our newsletter</p>
        </div>
        


      </div>
    </div>
  )
}

export default Footer