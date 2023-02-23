import React from 'react';
import {BsTelephone, BsTwitter} from "react-icons/bs";
import {FiMail} from "react-icons/fi";
import {GrLocation} from "react-icons/gr";
import {FaInstagramSquare, FaTwitter} from "react-icons/fa";
import {AiFillFacebook} from "react-icons/ai";
import {TbBrandTelegram} from "react-icons/tb";

const AboutUs = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about">
                    <div className="about--about-text"><h1> О нас</h1>
                        <p>Добро пожаловать в наш интернет-магазин! Наша компания приветствует всех, кто зашёл на сайт!»
                            «Наш интернет-магазин предлагает самые низкие цены, даже и не пытайтесь найти дешевле!»
                            «Наша компания существует уже много лет, на рынке мы являемся самой надёжной и успешной
                            компанией. Покупайте в нашем интернет-магазине снова и снова.»
                            «Поверьте, у нас есть всё необходимое. Вашему вниманию самый широкий ассортимент товаров на
                            всём
                            рынке.»
                            «Ждём вас за покупками каждый день, мы всегда к вашим услугам!.
                        </p>
                    </div>

                    <div className="about--about-one">
                        <div className="about--about-one__about-two">
                            <h1>Контакты</h1>
                            <a href="tel:996">
                                <BsTelephone/>+996 312 90 30 30</a>
                            <a href="tel:996">
                                <BsTelephone/>+996 312 90 30 30
                            </a>
                            <a href="tel:996"><BsTelephone/>+996 312 90 30 30</a>
                            <a href="#" className="mail">
                                <FiMail fontSize="20px"/>Motionshop@gmail.com
                            </a>
                            <a href="https://goo.gl/maps/XwvogKR9iFQUbYgo7">
                                <GrLocation fontSize="25px"/> Кыргызстан Бишкек/Турция Станбул.
                            </a>
                            <div className="about--about-one__about-two--about-icon">
                                <a href="https://www.instagram.com/motion_web/">
                                    <FaInstagramSquare className="icon" fontSize="25px"/>
                                </a>
                                <a href="b24-pememt.bitrix24.site/crm_form_p2gyo">
                                    <AiFillFacebook className="icon" fontSize="25px"/>
                                </a>
                                <a href="">
                                    <TbBrandTelegram className="icon" fontSize="25px"/>
                                </a>
                                <a href="b24-pememt.bitrix24.site/crm_form_p2gyo">
                                    <FaTwitter className="icon" fontSize="25px"/>
                                </a>
                            </div>
                        </div>
                        <iframe className="img"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93561.8885153103!2d74.59186095!3d42.87687505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2z0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1664792148375!5m2!1sru!2skg"
                                style={{border: 0}} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;