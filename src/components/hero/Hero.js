import React from 'react'
import './Hero.css'
import heroImage from '../../assets/bg-image.svg'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='container'>
            <div className='hero__wrapper'>
                <div className='hero__info'>
                    <h4>Sweet fun, full of milk.</h4>
                    <h2>Feel inside cold with our delicious <h3>ice-cream.</h3></h2>
                    <p>Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words.</p>
                    <button>Buy Now</button>
                </div>
                <div className='hero__img'>
                    <img src={heroImage} alt="ice cream" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero