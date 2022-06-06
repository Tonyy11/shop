import React from 'react'
import './Invoice.css'

const Invoice = () => {
  return (
    <div className='bod'>
        <p className='bodtop'>AVAILABLE CASH</p>

        <div className="balance">
            <p className='dollarsign'>$</p>
            <p className='doolaramount' style={{margin: '0', fontSize: '30px'}}>64,873.18</p>
        </div>
        <p className='acc-name'>SAMUEL OLAYIMIKA STEPHEN</p>

        <div className="day-view">
            <p className="day" style={{color: '#8A8A8E'}}>TODAY</p>
            <p className="view" style={{color: '#019DF8'}}>VIEW ALL</p>
        </div>

        <hr style={{color: '#D9D9D9'}}/>

        <div style={{display: 'grid', rowGap: '20px'}}>
            <div className="receipt">
                <div className="leftt">
                    <div className='inline'>
                        <section className='bullet'></section>
                        <p className='product'>PS5 Console & Controller </p>
                    </div>
                    <p className='date'>MAY 20, 09:32AM</p>
                </div>
                <div className="right" style={{color: '#FF0000'}}>-540.39$</div>
            </div>
            <div className="receipt">
                <div className="leftt">
                    <div className='inline'>
                        <section className='bullet'></section>
                        <p className='product'>Ashluxury</p>
                    </div>
                    <p className='date'>MAY 20, 08:28AM</p>
                </div>
                <div className="right" style={{color: '#FF0000'}}>-2,542.27$</div>
            </div>
            <div className="receipt">
                <div className="leftt">
                    <div className='inline'>
                        <section className='bullet' style={{backgroundColor: '#00850D'}}></section>
                        <p className='product'>Google adsense </p>
                    </div>
                    <p className='date'>MAY 20, 03:43AM</p>
                </div>
                <div className="right" style={{color: '#00850D'}}>+48,542.43$</div>
            </div>
        </div>

        {/* .......................REPEATED PROCESS.......................... */}

        <div className="day-view" style={{marginTop: '42px'}}>
            <p className="day" style={{color: '#8A8A8E'}}>LAST MONTH</p>
            <p className="view" style={{color: '#019DF8'}}>VIEW ALL</p>
        </div>

        <hr style={{color: '#D9D9D9'}}/>

        <div style={{display: 'grid', rowGap: '20px'}}>
            <div className="receipt">
                <div className="leftt">
                    <div className='inline'>
                        <section className='bullet'></section>
                        <p className='product'>Ashluxury</p>
                    </div>
                    <p className='date'>APR 16, 09:32AM</p>
                </div>
                <div className="right" style={{color: '#FF0000'}}>-760.23$</div>
            </div>
            <div className="receipt">
                <div className="leftt">
                    <div className='inline'>
                        <section className='bullet' style={{backgroundColor: '#00850D'}}></section>
                        <p className='product'>Bamboo</p>
                    </div>
                    <p className='date'>APR 21, 09:32AM</p>
                </div>
                <div className="right" style={{color: '#00850D'}}>+430.23$</div>
            </div>
            <div className="receipt">
                <div className="leftt">
                    <div className='inline'>
                        <section className='bullet' style={{backgroundColor: '#00850D'}}></section>
                        <p className='product'>Bamboo</p>
                    </div>
                    <p className='date'>APR 21, 09:32AM</p>
                </div>
                <div className="right" style={{color: '#00850D'}}>+430.23$</div>
            </div>
        </div>



    </div>
  )
}

export default Invoice
