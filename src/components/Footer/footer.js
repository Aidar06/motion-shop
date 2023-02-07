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
                        <NavLink to={'/women'}>Женщинам</NavLink>
                        <NavLink to={'/man'} >Мужчинам</NavLink>
                        <NavLink to={'/children'}>Детям</NavLink>
                    </div>
                    <div className='footer--links'>
                        <NavLink to={'/shew'}>Обувь</NavLink>
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
                                <BsInstagram/>
                            </div>
                            <div>
                                <BsWhatsapp/>
                            </div>
                            <div>
                                <FaFacebookF/>
                            </div>
                            <div>
                                <FaTelegramPlane/>
                            </div>
                        </div>
                    </div>
                    <div className='footer--address'>
                        <h2>Адрес</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius in dolor viverra feugiat neque, sed in. Mattis volutpat malesuada velit parturient aliquam, est. Mauris vitae velit laoreet faucibus nec amet velit.</p>
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
