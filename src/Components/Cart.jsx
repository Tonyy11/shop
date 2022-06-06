import React from 'react'
import './Cart.css'
import iphone from '../Assets/iphone.svg'

const Cart = () => {
  return (
    <div>
        <div id='headee'>
            <p className='cart-txt'>cart</p>
        </div>
        
        <div className='bodee'>
            <p className='congrats'>Congratulations ❤️, your partner just got you  a gift!</p>

            <div className="box">
                <div className="inside-box">
                    <img src={iphone} alt=""  style={{paddingTop: '10px'}} />

                    <div className="info">
                        <p className="product-info">iPhone 13 Pro, 128gb, Factory  unlocked </p>
                        <p className="price">$999.00/ ea</p>
                        <p className="delivery-type">Shipping only</p>
                    </div>

                    <p className='main-price'>$999.00</p>
                
                </div>

                <div className="quantity-box">
                    <div className="number">
                        <p className='one'>1</p>
                    </div>
                </div>
            </div>

            <p className='message'>
                Your partner already bought you this gift, proceed to pay 
                for delivery to have it shipped to you
            </p>

            <div className="delivery-charges">
                <div className="del">
                    <p >Delivery charges</p>
                </div>
                <div className="charge">
                    <p >$25.00</p>
                </div>
            </div>

            <div className='frame3'>
                <div className="button">
                    <p className="proceed">
                        Proceed
                    </p>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Cart