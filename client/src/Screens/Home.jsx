import React, { useEffect } from 'react'
import '../Assets/sass/pages/home.scss'
import { useDispatch, useSelector } from 'react-redux'
import Slider from "react-slick";
import Coupon from '../Components/Coupon';
import Newsletter from '../Components/Newsletter';
import { listproducts } from '../Actions/productactions';

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2
  };
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(listproducts())
  },[])
  
  const productlist = useSelector((state)=>state.PRODUCTLIST)
  const {products,loading,error}=productlist
  return (
    <main>
      <div className="hdr container">
          <h1>Discount Codes and Sales For Everything You Buy</h1>
          <p>Get Free Voucher Codes & Promo Codes on Brands You Crave For.</p>
          <div className="d-flex">
              <span>Verified <br /> <b>Codes</b></span>
              <span>Around <br /><b>20000+</b> Codes</span>
          </div>
          <Slider {...settings}>
            <a href="" className='slds'>
              <img src="http://localhost:3000/images/4.jpg" alt="" />
            </a>
          <a href="" className='slds'>
              <img src="http://localhost:3000/images/4.jpg" alt="" />
            </a>
          <a href="" className='slds'>
              <img src="http://localhost:3000/images/4.jpg" alt="" />
            </a>
          <a href="" className='slds'>
              <img src="http://localhost:3000/images/4.jpg" alt="" />
            </a>
          <a href="" className='slds'>
              <img src="http://localhost:3000/images/4.jpg" alt="" />
            </a>
          <a href="" className='slds'>
              <img src="http://localhost:3000/images/4.jpg" alt="" />
            </a>
          <a href="" className='slds'>
              <img src="http://localhost:3000/images/4.jpg" alt="" />
            </a>
          <a href="" className='slds'>
              <img src="http://localhost:3000/images/4.jpg" alt="" />
            </a>
          <a href="" className='slds'>
              <img src="http://localhost:3000/images/4.jpg" alt="" />
            </a>
        </Slider>
      </div>
      <div className="container ftsc">
        <h2 className='tleh2'>Featured Coupons</h2>
        {
          loading ? <img src='./images/loader.gif' alt='loading' className='loader'/> : products.map((dts,index)=>{return(<Coupon dts={dts} key={index}/>)})
        }
      </div>
      <div className="container ftsc">
        <h2 className='tleh2'>Top Sellers</h2>
        {
          loading ? <img src='./images/loader.gif' alt='loading' className='loader'/> : products.map((dts,index)=>{return(<Coupon dts={dts} key={index}/>)})
        }
      </div>
      <Newsletter/>
    </main>
  )
}

export default Home