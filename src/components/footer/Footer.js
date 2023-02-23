import "./style.css"

import vk from "./../../img/icons/vk.svg"
import instagram from "./../../img/icons/instagram.svg"
import twitter from "./../../img/icons/twitter.svg"
import linkedIn from "./../../img/icons/linkedIn.svg"
import gitHub from "./../../img/icons/gitHub.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={gitHub} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>TERMS & CONDITIONS  |  PRIVACY  |  LEGAL NOTICE </p>
                        <p>© COPYRIGHT 2023. All Rights Reserved. No claim to copyright ownership is made to underlying materials</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;