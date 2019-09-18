import React from 'react'
import Maps from './Maps'
import Adress from './Adress'
import ContactForm from './ContactForm'
import './styles.sass'

const Contact = () => {
    return(
        <div className="contactCont">
        <ContactForm/>
        <Adress/>
        <Maps/>
        </div>

)}

export default Contact