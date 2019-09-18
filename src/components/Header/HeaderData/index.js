import React from 'react'
import HeaderMenu from './HeaderMenu'
import HeaderHamburger from './HeaderHamburger'
import Logo from './Logo'

const HeaderData = () => {
    return(
        <div className="headerDataCont">
        <Logo></Logo>
        <HeaderMenu></HeaderMenu>
        <HeaderHamburger></HeaderHamburger>
        </div>
    )}

export default HeaderData