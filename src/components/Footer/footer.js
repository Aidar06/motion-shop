import React from 'react';
import {NavLink} from "react-router-dom";
// import {BsInstagram, BsWhatsapp, FaFacebookF, FaTelegramPlane} from "react-icons/all";
import {BsInstagram, BsWhatsapp} from "react-icons/bs";
import {FaFacebookF, FaTelegramPlane} from "react-icons/fa";

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="container">
                <div className="footer">
                    <NavLink to={'/'}><h1>MOTION SHOP</h1></NavLink>
                    <div className='footer--links'>
                        <NavLink to={'/woman'}>Женщинам</NavLink>
                        <NavLink to={'/man'} >Мужчинам</NavLink>
                        <NavLink to={'/children'}>Детям</NavLink>
                    </div>
                    <div className='footer--links'>
                        <NavLink to={'/shoe'}>Обувь</NavLink>
                        <NavLink to={'/faq'}>FAQ</NavLink>
                        <NavLink to={'/aboutUs'}>О нас</NavLink>
                    </div>
                    <div className="footer--contacts">
                        <h2>Связаться с нами:</h2>
                        <a href="#">+996 222 533 735</a>
                        <a href="#">+996 222 533 735</a>
                        <a href="#">+996 222 533 735</a>
                        <div className='footer--contacts__icons'>
                            <div>
                                <a href="https://www.instagram.com/motion_web/"><BsInstagram/></a>
                            </div>
                            <div>
                                <a href="b24-pememt.bitrix24.site/crm_form_p2gyo"><BsWhatsapp/></a>
                            </div>
                            <div>
                                <a href="#"><FaFacebookF/></a>
                            </div>
                            <div>
                                <a href="#"><FaTelegramPlane/></a>
                            </div>
                        </div>
                    </div>
                    <div className='footer--address'>
                        <h2>Адрес</h2>
                        <p>Турусбекова 109/3 Бишкек, 720001.</p>
                        <p>Motion Web IT Academy</p>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <div/>
                    <p>Motion-Shop - все права защищены</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
