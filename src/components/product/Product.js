import React from 'react'
import './Product.css'
import productImage from '../../assets/productts.svg'
import productImage2 from '../../assets/chococream.svg'
import productImage3 from '../../assets/limons.svg'

const Product = () => {
  return (
    <section className='product'>
        <div className='container'>
            <h2>Our Product</h2>
            <div className='product-category'>
                <div><h3>ICE CREAM</h3></div>
                <div><h3>CAYENNE CHOCOLATE</h3></div>
                <div><h3>CAKE BATTER</h3></div>
                <div><h3>CANDY CANE</h3></div>
                <div><h3>PLATTERS</h3></div>
                <div><h3>DESSERT</h3></div>
            </div>

                <div className='product__card-left'>
                    <div className='product__img-left'>
                        <img src={productImage} alt="" />
                    </div>
                    <div className='product__text-left'>
                        <h4>Brown bread</h4>
                        <p>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>
                        <strong>$19.55</strong> <strong className='line'>$22.55</strong>
                        <button className='global__btn product__btn'>Buy Now</button>
                    </div>
                </div>

                <div className='product__card-right'>
                    <div className='product__text-right'>
                        <h4>Brown bread</h4>
                        <p>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>
                        <strong>$19.55</strong> <strong className='line'>$22.55</strong>
                        <div className='product__right-btn'>
                        <button className='global__btn product__btn'>Buy Now</button>
                        </div>
                    </div>
                    <div className='product__img-right'>
                        <img src={productImage3} alt="" />
                    </div>
                </div>

                <div className='product__card-left'>
                    <div className='product__img-left'>
                        <img src={productImage2} alt="" />
                    </div>
                    <div className='product__text-left'>
                        <h4>Sweet corn</h4>
                        <p>Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a pioneer in the healthy fast food scene.</p>
                        <strong>$19.55</strong> <strong className='line'>$22.55</strong>
                        <button className='global__btn product__btn'>Buy Now</button>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default Product