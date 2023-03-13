import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {
  return (
    <div className='brdcrmb'>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to={`http://localhost:3000/categories`}>Categories</Link>
            </li>
            {
                props.item2 &&
                <li>
                    <Link to={`http://localhost:3000/categories/${props.item2}`}>{props.item2}</Link>
                </li>
            }
            {
                props.item3 && 
                <li>
                    <Link to={`http://localhost:3000/${props.item3}`}>{props.item3}</Link>
                </li>
            }
        </ul>
    </div>
  )
}

export default BreadCrumb