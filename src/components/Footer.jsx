import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
const Footer=()=>{
    return(
        <footer>
            <div className="footer-content container">
                <div className="d-flex justify-content-between w-100 align-items-center">
                    <a className="navbar-brand text-light" href="#home" >Portifolio</a>
                    <div className="link-icons">
                        <li className="nav-item icon-link">
                            <a className="nav-link" href="#linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </li>
                        
                        <li className="nav-item icon-link">
                            <a className="nav-link" href="https://github.com/mariam123hagras" rel="noreferrer" target="_blank">
                             <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                    </div>
                    
                </div>
                <p className="sup-paragraph fs-5 fw-normal text-center text-lg-end w-100 text-white">
                    --&copy; Copyrights 2025-- All Rights Reserved Here By Mariam Hagras
                </p>
            </div>
        </footer>
    );
}
export default React.memo(Footer);