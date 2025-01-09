import React from 'react'
import './Delivery.css'
import car from '../../assets/car.svg'
import group from '../../assets/Group.svg'
import cashback from '../../assets/cash-back.svg'
import fastdelivery from '../../assets/fast-delivery.svg'

const Delivery = () => {
  return (
    <section className='delivery'>
        <div className='container'>
            <div className='delivery__wrapper'>
                <div className='delivery__card'>
                    <img src={car} alt="car image" />
                    <h2>Free Shipping</h2>
                    <p>Last Chance! Free shipping on all orders ends today.</p>
                </div>
                <div className='delivery__card'>
                    <img src={group} alt="car image" />
                    <h2>Quick Packaging</h2>
                    <p>Last Chance! Free shipping on all orders ends today.</p>
                </div>
                <div className='delivery__card'>
                    <img src={cashback} alt="car image" />
                    <h2>100% Money Back</h2>
                    <p>Last Chance! Free shipping on all orders ends today.</p>
                </div>
                <div className='delivery__card'>
                    <img src={fastdelivery} alt="car image" />
                    <h2>Fast Delivery</h2>
                    <p>Last Chance! Free shipping on all orders ends today.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Delivery