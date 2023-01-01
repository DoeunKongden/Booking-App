import React from 'react'
import "./feature.css"

function Feature() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=" alt="image not found" />
            <div className="featuredTitle">
                <h1>Angkor Watt Botique</h1>
                <h1>123 people visited</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/city/max500/823862.webp?k=3bba7b760f2b8ae55a81c4ba23f081a9b76b3eaa03e5cd936d31d09c5cf50d96&o=" alt="image not found" />
            <div className="featuredTitle">
                <h1>Angkor Watt Botique</h1>
                <h1>123 people visited</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImg' src="https://cf.bstatic.com/xdata/images/city/max500/823862.webp?k=3bba7b760f2b8ae55a81c4ba23f081a9b76b3eaa03e5cd936d31d09c5cf50d96&o=" alt="image not found" />
            <div className="featuredTitle">
                <h1>Angkor Watt Botique</h1>
                <h1>123 people visited</h1>
            </div>
        </div>
    </div>
  )
}

export default Feature