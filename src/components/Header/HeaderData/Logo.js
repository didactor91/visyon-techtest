import React from 'react'
import LogoWhite from '../../../common/img/LogoWhiteBack.png'
import './styles.sass'


const Logo = () => {
    return(
        <div className="logoCont">
        <img className="topLogo" src={LogoWhite} alt="Company Logo"/>
        </div>
    )
}
export default Logo