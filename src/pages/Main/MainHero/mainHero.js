import React from 'react';
import {NavLink} from "react-router-dom";
import img from './../../../assets/img/famali.png'

const MainHero = () => {
    return (
        <section id="hero">
            <img src={img} alt="img"/>
            <div className="container">
                <div className="hero">
                    <div className="hero--cloth"><h1>ОДЕЖДА ДЛЯ ВСЕЙ СЕМЬИ!</h1>
                        <div className="hero--cloth__text">
                            <ul><NavLink to={'/women'}>
                                <li>Для женщин</li>
                            </NavLink></ul>
                            <ul><NavLink to={'/man'}>
                                <li>Для мужчин</li>
                            </NavLink></ul>
                            <ul><NavLink to={'/children'}>
                                <li>Для детей</li>
                            </NavLink></ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainHero;