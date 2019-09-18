/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from "react-router-dom"
import './styles.sass'

const HeaderMenu = () => {
    return (
        <div className="menuCont">
            <div className="menuContItem">
            <Link to={'/technology'} className="menuItem">TECHNOLOGY</Link>
            </div>
            <div className="menuContItem">
            <Link to={'/ideas'} className="menuItem">IDEAS</Link>
            </div>
            <div className="menuContItem">
            <Link to={'/leadership'} className="menuItem">LEADERSHIP</Link>
            </div>
            <div className="menuContItem">
            <Link to={'/'} className="menuItem">VIDEO</Link>
            </div>
            <div className="menuContItem">
            <Link to={'/news'} className="menuItem">NEWS</Link>
            </div>
            <div className="menuContItem">
            <Link to={'/finance'} className="menuItem">FINANCE</Link>
            </div>
            <div className="menuContItem">
            <Link to={'/entertainment'} className="menuItem">ENTERTAINMENT</Link>
            </div>
            <div className="menuContItem">
                <Link to={'/contacts'} className="menuItem">CONTACT US</Link>
            </div>
        </div>
    )
}

export default HeaderMenu