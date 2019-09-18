/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './styles.sass'

const ContactForm = () => {

    function handleSubmit(e) {
        const{
            name:{value: name},
            email:{value: email},
            subject:{value: subject}
        }=e.target
        alert(`Name: ${name}\nMail: ${email}\nSubject: ${subject}` );
        e.preventDefault();
      }

    return (
        <div className="contactFormCont">
            <div className="contactFormArea">
                <h1 className="contactFormTitleCont">
                    <span className="contactFormTitle1">CONTACT OUR </span>
                    <span className="contactFormTitle2">NEWSROOM TEAM</span>
                </h1>
                <p className="contactFormText">
                    There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.
                    The universe is constantly changing and moving.
            </p>
                <form className="contactFormShield" onSubmit={handleSubmit}>
                    <input className="contactFormInput" type="text" name="name" placeholder="YOUR NAME" required autoFocus/>
                    <input className="contactFormInput" type="email" name="email" placeholder="YOUR E-MAIL" required />
                    <input className="contactFormInput" type="text" name="subject" placeholder="SUBJECT" required />
                    <input className="contactFormButton" type="submit" value="SEND"/>
                </form>
            </div>

            <div className="contactPhoto">
                <div className="contactImgItem"></div>
            </div>
        </div>


    )
}

export default ContactForm