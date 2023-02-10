import React from 'react';
import {BsArrowRight} from "react-icons/bs";
import man from "../../../assets/img/man.png"
import woman from "..//..//../assets/img/woman.png"
import child from "..//..//../assets/img/child.png"
import shoe from "..//..//../assets/img/shoe.png"
import pink from "..//..//../assets/img/pink.png"
import {NavLink} from "react-router-dom";


const MainCategory = () => {

    return (
        <>
            <section id="category">
                <div className="container">
                    <div className="category">
                        <h2>Категории</h2>
                        <div className="category--block">

                            <NavLink to={"/man"}>
                                <div className="category--block__man">

                                    <img className="category--block__man--bg" src={man} alt="img"/>

                                    <div className="category--block__man--one">
                                        <img className="category--block__man--one__pink" src={pink} alt="img"/>
                                        <p>Мужская</p>
                                        <BsArrowRight className="category--block__man--one__icon"/>
                                    </div>

                                </div>
                            </NavLink>

                            <NavLink to={"/woman"}>
                                <div className="category--block__woman">
                                    <img className="category--block__woman--bg2" src={woman} alt="img"/>
                                    <div className="category--block__woman--two">
                                        <img className="category--block__woman--two__pink" src={pink} alt="img"/>
                                        <p>Женская</p>
                                        <BsArrowRight className="category--block__woman--two__icon"/>
                                    </div>
                                </div>
                            </NavLink>


                            <NavLink to={"/children"}>
                                <div className="category--block__child">
                                    <img className="category--block__bg3" src={child} alt="img"/>
                                    <div className="category--block__child--three">
                                        <img className="category--block__child--three__pink" src={pink} alt="img"/>
                                        <p>Детская</p>
                                        <BsArrowRight className="category--block__child--three__icon"/>
                                    </div>
                                </div>
                            </NavLink>


                            <NavLink to={"/shoe"}>
                                <div className="category--block__shoe">
                                    <img className="category--block__shoe--bg4" src={shoe} alt="img"/>
                                    <div className="category--block__shoe--four">
                                        <img className="category--block__shoe--four__pink" src={pink} alt="img"/>
                                        <p>Обувь</p>
                                        <BsArrowRight className="category--block__shoe--four__icon"/>
                                    </div>
                                </div>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </section>

        </>

    );
};


export default MainCategory;