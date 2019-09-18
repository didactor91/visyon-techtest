import React from 'react'
import { Link } from "react-router-dom"
import './styles.sass'

const Sections = () => {
    return (
        <div className="sectionsCont">
            <div className="sectionsContDuo">
                <div className="sectionsContItem">
                <Link to={'/technology'} className="sectionsItem">TECHNOLOGY</Link>
                </div>
                <div className="sectionsContItem">
                <Link to={'/ideas'} className="sectionsItem">IDEAS</Link>
                </div>
            </div>
            <div className="sectionsContDuo">
                <div className="sectionsContItem">
                <Link to={'/leadership'} className="sectionsItem">LEADERSHIP</Link>
                </div>
                <div className="sectionsContItem">
                <Link to={'/'} className="sectionsItem">VIDEO</Link>
                </div>
            </div>
            <div className="sectionsContDuo">
                <div className="sectionsContItem">
                <Link to={'/news'} className="sectionsItem">NEWS</Link>
                </div>
                <div className="sectionsContItem">
                <Link to={'/finance'} className="sectionsItem">FINANCE</Link>
                </div>
            </div>
            <div className="sectionsContDuo">
                <div className="sectionsContItem">
                <Link to={'/entertainment'} className="sectionsItem">ENTERTAINMENT</Link>
                </div>
                <div className="sectionsContItem">
                <Link to={'/contacts'} className="sectionsItem">CONTACT US</Link>
                </div>
            </div>
        </div>
    );
};

export default Sections;