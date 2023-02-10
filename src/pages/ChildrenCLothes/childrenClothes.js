import React from 'react';
import {HiArrowLongDown, HiArrowLongRight} from "react-icons/hi2";

const ChildrenClothes = () => {
    return (
        <section id="childrenClothes">
            <div className="container">
                <div className="childrenClothes">

                    <h2 className="childrenClothes--childText">Детская одежда</h2>

                    <div className='childrenClothes--category'>
                        <div className='childrenClothes--category__block own'>
                            <div className='childrenClothes--category__block--bg'>
                                <div className='childrenClothes--category__block--bg__text'>
                                    <h1>Мужская</h1>
                                    <HiArrowLongRight className='manClothes--category__block--bg__text--icon'/>
                                </div>
                            </div>
                        </div>

                        <div className='childrenClothes--category__block two'>
                            <div className='childrenClothes--category__block--bg'>
                                <div className='childrenClothes--category__block--bg__text'>
                                    <h1>Женская</h1>
                                    <HiArrowLongRight className='manClothes--category__block--bg__text--icon'/>
                                </div>
                            </div>
                        </div>

                        <div className='childrenClothes--category__block three'>
                            <div className='childrenClothes--category__block--bg'>
                                <div className='childrenClothes--category__block--bg__text'>
                                    <h1>Детская</h1>
                                    <HiArrowLongDown className='manClothes--category__block--bg__text--icon'/>
                                </div>
                            </div>
                        </div>

                        <div className='childrenClothes--category__block four'>
                            <div className='childrenClothes--category__block--bg'>
                                <div className='childrenClothes--category__block--bg__text'>
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

export default ChildrenClothes;