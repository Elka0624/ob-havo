import React, {useEffect} from 'react'
import './TopNav.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import img from '../../Assent/logo2.jpg'

const TopNav = () => {
    useEffect(() =>{
        Aos.init({duration: 3000})
    }, [])
return (
    <>
        <div className="topNav">
            <div className="container">
                <div className="main">
                    <div className="logo" data-aos="fade-right">
                        <img src={img} alt="" />
                    </div>
                    <div className="data" data-aos="fade-left">
                        <h3>Elka.Dev | Ob-havo App</h3>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default TopNav
