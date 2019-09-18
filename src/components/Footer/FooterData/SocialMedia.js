import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'
import './styles.sass'

const SocialMedia = () => {
    return (
        <div className="socialMediaCont">

            <FontAwesomeIcon className='faIcon' icon={faFacebookF} />
            <FontAwesomeIcon className='faIcon' icon={faTwitter} />
            <FontAwesomeIcon className='faIcon' icon={faInstagram} />
            <FontAwesomeIcon className='faIcon' icon={faPinterest} />

        </div>
    );
};

export default SocialMedia