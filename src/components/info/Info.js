import React from 'react'
import './Info.css'
import infoImage from '../../assets/section2-image.svg'

const Info = () => {
  return (
    <section className='info'>
        <div className='container'>
            <div className='info__wrapper'>
                <div className='info__text'>
                    <h2>Brown Sugar Oatmea</h2>
                    <p>Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.Together with McDonald’s, Burger King has grown to become synonymous.</p>
                    <button className='global__btn'>See Details</button>
                </div>
                <div className='info__img'>
                    <img src={infoImage} alt="ice cream" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Info