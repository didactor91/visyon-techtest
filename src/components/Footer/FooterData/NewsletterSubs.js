/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const NewsletterSubs = () => {

    function handleSubmit(e) {
        const{
            email:{value: email}
        }=e.target

        alert(`You are subscribed correctly. Your e-mail is: ${email}`);
        e.preventDefault();
      }

    return (
        <div className="newsletterSubsCont">
            <form className="newsletterSubsShield" onSubmit={handleSubmit}>
                <input className="newsletterSubsInput" type="email" name="email" placeholder="E-MAIL" required/>
                <input className="newsletterSubsButton" type="submit" value="SUBSCRIBE"/>
            </form>
        </div>
    );
};

export default NewsletterSubs;