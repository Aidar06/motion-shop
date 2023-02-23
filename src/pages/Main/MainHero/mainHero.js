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
                            <a><NavLink to={'/woman'}>
                                <div></div>
                                Для женщин
                            </NavLink></a>
                            <a><NavLink to={'/man'}>
                                <div></div>
                                Для мужчин
                            </NavLink></a>
                            <a><NavLink to={'/children'}>
                                <div></div>
                                Для детей
                            </NavLink></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default MainHero;