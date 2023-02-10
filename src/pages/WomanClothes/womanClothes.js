import React from 'react';
import {HiArrowLongDown, HiArrowLongRight} from "react-icons/hi2";
// import {NavLink} from "react-router-dom";

const WomanClothes = () => {
    return (
        <section id="womanClothes">
            <div className="container">
                <div className="womanClothes">
                    <h2 className="womanClothes--womanText">Женская одежда</h2>
                    <div className='womanClothes--category'>
                        <div className='womanClothes--category__block own'>
                            <div className='womanClothes--category__block--bg'>
                                <div className='womanClothes--category__block--bg__text'>
                                    {/*<NavLink to={'/man'} className="NavLink">*/}
                                    <h1>Мужская</h1>
                                    {/*/!*</NavLink>*!/    */}
                                    <HiArrowLongRight className='manClothes--category__block--bg__text--icon'/>
                                </div>
                            </div>
                        </div>

                        <div className='womanClothes--category__block two'>
                            <div className='womanClothes--category__block--bg'>
                                <div className='womanClothes--category__block--bg__text'>
                                    <h1>Женская</h1>
                                    <HiArrowLongDown className='manClothes--category__block--bg__text--icon'/>
                                </div>
                            </div>
                        </div>

                        <div className='womanClothes--category__block three'>
                            <div className='womanClothes--category__block--bg'>
                                <div className='womanClothes--category__block--bg__text'>
                                    <h1>Детская</h1>
                                    <HiArrowLongRight className='manClothes--category__block--bg__text--icon'/>
                                </div>
                            </div>
                        </div>

                        <div className='womanClothes--category__block four'>
                            <div className='womanClothes--category__block--bg'>
                                <div className='womanClothes--category__block--bg__text'>
                                    <h1>Обувь</h1>
                                    <HiArrowLongRight className='manClothes--category__block--bg__text--icon'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WomanClothes;