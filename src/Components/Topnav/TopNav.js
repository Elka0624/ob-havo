import React from 'react'
import './TopNav.css'
import img from '../../Assent/logo2.jpg'

const TopNav = () => {
return (
    <>
        <div className="topNav">
            <div className="logo">
                <img src={img} alt="" />
            </div>
            <div className="main">
                <h3>Elka.Dev || Ob-havo App</h3>
            </div>
        </div>
    </>
)
}

export default TopNav
