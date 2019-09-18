import React from 'react'
import Logo from '../../../common/img/LogoBlackBack.png'
import './styles.sass'

const FooterLogo = () => {
    return(
        <div className="footerLogoCont">
        <img className="footerLogoItem" src={Logo} alt="Company Logo"/>
        </div>
    )
}
export default FooterLogo