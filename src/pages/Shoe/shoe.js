import React from 'react';
import {HiArrowLongDown, HiArrowLongRight} from "react-icons/hi2";
import {NavLink} from "react-router-dom";

const Shoe = () => {
    return (
        <section id="shoeClothes">
            <div className="container">
                <div className="shoeClothes">

                    <h2 className="shoeClothes--shoeText">Обувь</h2>

                    <div className='shoeClothes--category'>
                        <div className='shoeClothes--category__block own'>
                            <div className='shoeClothes--category__block--bg'>
                                <NavLink to={'/man'} className='NavLink'>
                                    <div className='shoeClothes--category__block--bg__text'>
                                        <h1>Мужская</h1>
                                        <HiArrowLongRight className='shoeClothes--category__block--bg__text--icon'/>
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        <div className='shoeClothes--category__block two'>
                            <div className='shoeClothes--category__block--bg'>
                                <NavLink to={'/woman'} className='NavLink'>
                                    <div className='shoeClothes--category__block--bg__text'>
                                        <h1>Женская</h1>
                                        <HiArrowLongRight className='shoeClothes--category__block--bg__text--icon'/>
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        <div className='shoeClothes--category__block three'>
                            <div className='shoeClothes--category__block--bg'>
                                <NavLink to={'/children'} className='NavLink'>
                                    <div className='shoeClothes--category__block--bg__text'>
                                        <h1>Детская</h1>
                                        <HiArrowLongRight className='shoeClothes--category__block--bg__text--icon'/>
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        <div className='shoeClothes--category__block four'>
                            <div className='shoeClothes--category__block--bg'>
                                <div className='shoeClothes--category__block--bg__text'>
                                    <h1>Обувь</h1>
                                    <HiArrowLongDown className='shoeClothes--category__block--bg__text--icon'/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shoe;