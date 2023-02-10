import React from 'react';
import {HiArrowLongDown, HiArrowLongRight} from "react-icons/hi2";


const ManClothes = () => {
    return (
        <section id="manClothes">
            <div className="container">
                <div className="manClothes">
                    {/*<div className="manClothes--manText">*/}
                        <h2 className="manClothes--manText">Мужская одежда</h2>
                    {/*</div>*/}
                    <div className='manClothes--category'>
                        <div className='manClothes--category__block own'>
                            <div className='manClothes--category__block--bg'>
                                <div className='manClothes--category__block--bg__text'>
                                    <h1>Мужская</h1>
                                    <HiArrowLongDown className='manClothes--category__block--bg__text--icon'/>
                                </div>
                            </div>
                        </div>

                        <div className='manClothes--category__block two'>
                            <div className='manClothes--category__block--bg'>
                                <div className='manClothes--category__block--bg__text'>
                                    <h1>Женская</h1>
                                    <HiArrowLongRight className='manClothes--category__block--bg__text--icon'/>
                                </div>
                            </div>
                        </div>

                        <div className='manClothes--category__block three'>
                            <div className='manClothes--category__block--bg'>
                                <div className='manClothes--category__block--bg__text'>
                                    <h1>Детская</h1>
                                    <HiArrowLongRight className='manClothes--category__block--bg__text--icon'/>
                                </div>
                            </div>
                        </div>

                        <div className='manClothes--category__block four'>
                            <div className='manClothes--category__block--bg'>
                                <div className='manClothes--category__block--bg__text'>
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

export default ManClothes;