import React from 'react'
import './styles.sass'

const Adress = () => {
    return (
        <div className="adressCont">
            <div className="adressInfoBox">
            <h3 className="adressInfoTitle">Adress</h3>
            <p className="adressInfoText">709 Honey Creek Dr.</p>
            <p className="adressInfoText">New York, NY 10028</p>
            </div>
            <div className="adressInfoBox">
            <h3 className="adressInfoTitle">Contacts</h3>
            <p className="adressInfoText">+1 (315) 754-2205</p>
            <p className="adressInfoText">mail@company.com</p>
            </div>
            <div className="adressInfoBox">
            <h3 className="adressInfoTitle">Working Hours</h3>
            <p className="adressInfoText">Mon-Fri 9am-10pm</p>
            </div>
        </div>

    )
}

export default Adress