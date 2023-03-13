import React, {useEffect, useState} from 'react'
import '../Assets/sass/pages/category.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { listproducts } from '../Actions/productactions'
import BreadCrumb from '../Components/BreadCrumb'
import Coupon from '../Components/Coupon'
import Widgets from '../Components/Widgets'

const Category = () => {

    const {name}=useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(listproducts())
    },[])
    
    const productlist = useSelector((state)=>state.PRODUCTLIST)
    const {products,loading,error}=productlist
    const list=[];

    products.map((prd)=>{if(prd.store.category.toLowerCase() === name.toLowerCase()){list.push(prd)}})

    const [nwlst,setnwlst] = useState(list.slice(0,10 ))
    function navtofunc(e){
        console.log(e.target.innerText)
        document.getElementsByClassName("active")[0].classList.remove("active")
        e.target.classList.add("active")
        setnwlst(list.slice(((e.target.innerText*10)-10),(e.target.innerText*10)))
        console.log(nwlst)
    }
    function prevnav(){
        const pgnb=document.getElementsByClassName("active")[0].innerText
        console.log(pgnb,"prv")
        document.getElementsByClassName("active")[0].classList.remove("active")
        document.querySelector(`.pgnav span:nth-of-type(${pgnb})`).classList.add("active")
        setnwlst(list.slice(((pgnb*10)-20),((pgnb*10)-10)))
    }
    function nextnav(){
        const pgnb=document.getElementsByClassName("active")[0].innerText
        document.getElementsByClassName("active")[0].classList.remove("active")
        document.querySelector(`.pgnav span:nth-of-type(${parseInt(pgnb)+2})`).classList.add("active")
        setnwlst(list.slice((pgnb*10),((pgnb*10)+10)))
    }
    useEffect(()=>{
        var ttnav=Math.round(list.length/10)
        document.querySelectorAll(`.pgnav span:nth-of-type(n+${ttnav + 2}):not(.next)`).forEach((e)=>{e.remove()})
        if(document.querySelector(".pgnav span:nth-of-type(2)").classList.contains("active")){
            document.getElementsByClassName("prev")[0].style.display="none"
        }
        else{
            document.getElementsByClassName("prev")[0].style.display="inline"
        }
        if(document.querySelector(".pgnav span:nth-last-of-type(2)").classList.contains("active")){
            document.getElementsByClassName("next")[0].style.display="none"
        }
        else{
            document.getElementsByClassName("next")[0].style.display="inline"
        }
    },[nwlst])
    
  return (
    <main>
        <div className="container ct">
            <div className="stlebx d-flex">
                <div className="cntst">
                    <BreadCrumb item1="Category" item2={name}/>
                    <img src="http://localhost:3000/images/4.jpg" alt="" />
                    <h1>Steve Madden Discount Codes February-2023</h1>
                    <p>Save your money with these 10 Steve Madden promo codes & offers</p>
                    <div className="rating">
                        <span className='icon-circle-right'></span>
                        <span className='icon-circle-right'></span>
                        <span className='icon-circle-right'></span>
                        <span className='icon-circle-right'></span>
                        <span className='icon-circle-right'></span>
                    </div>
                </div>
            </div>
            <div className="cpnsbx d-flex">
                <div className="lftstr d-flex">
                {
                    loading ? <img src='../images/loader.gif' alt='loading' className='loader'/> : list.map((dts,index)=>{return(<Coupon dts={dts} key={index}/>)})
                }
                    <div className="pgnav d-flex">
                        <span onClick={prevnav} className="prev">Prev</span>
                        <span className='active' onClick={navtofunc}>1</span>
                        <span onClick={navtofunc}>2</span>
                        <span onClick={navtofunc}>3</span>
                        <span onClick={navtofunc}>4</span>
                        <span onClick={navtofunc}>5</span>
                        <span onClick={navtofunc}>6</span>
                        <span onClick={navtofunc}>7</span>
                        <span onClick={navtofunc}>8</span>
                        <span onClick={navtofunc}>9</span>
                        <span onClick={navtofunc}>10</span>
                        <span onClick={nextnav} className="next">Next</span>
                    </div>
                </div>
                <Widgets/>
            </div>
        </div>
    </main>
  )
}

export default Category