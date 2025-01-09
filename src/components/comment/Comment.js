import React from 'react'
import './Comment.css'
import person from '../../assets/person.svg'
import choc from '../../assets/choc.svg'
import left from '../../assets/left.svg'
import right from '../../assets/right.svg'
import rightImage from '../../assets/right-image.svg'
import centerImage from '../../assets/center.svg'
import leftImage from '../../assets/left-image.svg'

const Comment = () => {
  return (
    <section className='comment'>
        <div className='container'>
            <div className='comment__wrapper'>
                <div className='comment__info'>
                    <img src={person} alt="person" />
                    <div className='comment__text'>
                        <h2>Adele A. McNeill</h2>
                        <h4>AMIRICAN</h4>
                    </div>
                    <p>Thanks a lot for the prompt service. Really appreciate. Excellence taste in Every Bite.Add a joy of best Taste. Foodie Moments.</p>

                    <div className='comment__person'>
                        <img src={left} alt="left" />
                        <img src={leftImage} alt="person" />
                        <img src={centerImage} alt="person" />
                        <img src={rightImage} alt="person" />
                        <img src={right} alt="right" />
                    </div>
                </div>
                
                <div className='comment__img'>
                    <img src={choc} alt="left" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Comment