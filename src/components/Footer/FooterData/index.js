import React from 'react'
import './styles.sass'
import FooterLogo from './FooterLogo'
import Copyright from './Copyright'
import Sections from './Sections'
import SocialMedia from './SocialMedia'
import NewsletterSubs from './NewsletterSubs'

const FooterData = () => {
    return (
        <div className="footerDataCont">
            <div className="footerDataDuo">
                <FooterLogo />
                <Copyright />
            </div>
            <Sections />
            <div className="footerDataDuo2">
                <SocialMedia />
                <NewsletterSubs />
            </div>
        </div>

    )
}

export default FooterData