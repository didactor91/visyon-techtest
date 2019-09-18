import React from 'react'
import { Link } from "react-router-dom"
import './styles.sass'

const HeaderHamburger = () => {
    return (
        <div className='hamburgerNav'>
        <input type="checkbox" id="inputHamburger" className="inputHamburger"/>
        <label htmlFor="inputHamburger">
        <div className="hamburgerCont">
                <span></span>
                <span></span>
                <span></span>
            </div>
            </label>
            <div className="menuHamburgerCont">
            <Link to={'/technology'} className="menuHambItem">TECHNOLOGY</Link>
            
            <Link to={'/ideas'} className="menuHambItem">IDEAS</Link>
            
            <Link to={'/leadership'} className="menuHambItem">LEADERSHIP</Link>
            
            <Link to={'/'} className="menuHambItem">VIDEO</Link>
            
            <Link to={'/news'} className="menuHambItem">NEWS</Link>
            
            <Link to={'/finance'} className="menuHambItem">FINANCE</Link>
            
            <Link to={'/entertainment'} className="menuHambItem">ENTERTAINMENT</Link>
            
            <Link to={'/contacts'} className="menuHambItem">CONTACT US</Link>
            </div>
            </div>
            )
}

export default HeaderHamburger