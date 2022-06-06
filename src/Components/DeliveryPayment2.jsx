import React from 'react'
import './DeliveryPayment.css'
import visa from '../Assets/visa.svg'


const Shipping = () => {
  return (
    <div>

      <div className="headee">
        <p className='cart-txt'>Delivery Payment</p>
      </div>

      <div className="bodee">

        <p className="greetings">Choose a payment method</p>
        <p className="greetings-txt">You will not be charged until you review this order on the next page.</p>

        <div className="cardtype">
            <div className="left">
                <div className="outer-ellipse">
                <div className="inner-ellipse"></div>
                </div>
                <p className="cardtxt">Credit card / Debit card</p>
            </div>
            

            <img src={visa} alt="" />
        </div>

        <div className="major-info">
                <p className='details' style={{width: '86px'}}>Name on card </p>
                <input className='details-input' type="text" placeholder='Aubrey Graham' />
        </div>

        <div className="major-info">
                <p className='details' style={{width: '86px'}}>Card number</p>
                <input className='details-input' type="text" placeholder='**** **** ***** ****' />
        </div>

        <div className="minor-info">
            <div>
                <p className='minor-details'>Expiration date </p>
                <input className='minor-input' type="text" placeholder='MM / YY'/> 
            </div>

            <div>
                <p className='minor-details'>Security code</p>
                <input className='minor-input' type="text" placeholder='CVV'/> 
            </div> 
        </div>

          <div className="checkbox-container" style={{
              marginTop: '16px',
              
          }}>
            <input type="checkbox" id='cb1' />
            <label htmlFor="cb1">
              My billing address is same as my shipping addresss.
            </label>
          </div>

          <p className="greetings" style={{marginTop: '49px'}}>
            Billing Address
        </p>
        
        <div className="major-info">
                <p className='details'>First name *</p>
                <input className='details-input' type="text" />
        </div>

        <div className="major-info">
                <p className='details'>Last name *</p>
                <input className='details-input' type="text" />
        </div>

        <div className="major-info">
                <p className='details'>Street Address *</p>
                <input className='details-input' type="text" />
        </div>

        <div className="minor-info">
            <div>
                <p className='minor-details'>Apt or unit (optional)</p>
                <input className='minor-input' type="text" /> 
            </div>

            <div>
                <p className='minor-details'>City *</p>
                <input className='minor-input' type="text" /> 
            </div> 
        </div>

        <div className="minor-info">
            <div>
                <p className='minor-details'>State *</p>
                <input className='minor-input' type="text" /> 
            </div>

            <div>
                <p className='minor-details'>Zip code *</p>
                <input className='minor-input' type="text" /> 
            </div> 
        </div>

        <div className="major-info">
                <p className='details'>Phone number *</p>
                <input className='details-input' type="text" />
        </div>
        <p className="additional-txt">
         We'll contact you in case anything comes up with your order.
        </p>

        <div className='frame3rd' style={{marginTop: '29px',}}>
            <div className="button">
                <p className="proceed">
                    Confirm
                </p>
            </div>
        </div>
        
      </div>

    </div>
  )
}

export default Shipping
