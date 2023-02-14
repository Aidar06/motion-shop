import React, {useState} from 'react';
import {HiArrowLongDown, HiArrowLongRight} from "react-icons/hi2";
import {NavLink} from "react-router-dom";
import {shew} from "../../FackBackEnd/backEnd";
import {AiOutlineArrowDown} from "react-icons/ai";

const Shoe = () => {
    const [mere,setMore] = useState(15)
    return (
        <section id="shoeClothes">
            <div className="container">
                <div className="shoeClothes">
                    <div className='shoeClothes--category'>
                        <div className='shoeClothes--category__block own'>
                            <NavLink to={'/man'}>
                                <div className='shoeClothes--category__block--bg'>
                                    <NavLink to={'/man'} className='NavLink'>
                                        <div className='shoeClothes--category__block--bg__text'>
                                            <h1>Мужская</h1>
                                            <HiArrowLongRight className='shoeClothes--category__block--bg__text--icon'/>
                                        </div>
                                    </NavLink>
                                </div>
                            </NavLink>
                        </div>

                        <div className='shoeClothes--category__block two'>
                            <NavLink to={'/woman'}>
                                <div className='shoeClothes--category__block--bg'>
                                    <div className='shoeClothes--category__block--bg__text'>
                                        <h1>Женская</h1>
                                        <HiArrowLongRight className='shoeClothes--category__block--bg__text--icon'/>
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                        <div className='shoeClothes--category__block three'>
                            <NavLink to={'/woman'}>
                                <div className='shoeClothes--category__block--bg'>
                                    <div className='shoeClothes--category__block--bg__text'>
                                        <h1>Детская</h1>
                                        <HiArrowLongRight className='shoeClothes--category__block--bg__text--icon'/>
                                    </div>
                                </div>
                            </NavLink>
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
                    <h1 className='shoeClothes--title'>Обувь</h1>
                    <div className="shoeClothes--group">
                        {
                            shew.slice(0,mere).map(el => {
                                return(
                                    <NavLink to={`/addBasket/${el.id}`} key={el.id}>
                                        <div className='shoeClothes--group__block'>
                                            <div>
                                                <img src={el.img} alt=""/>
                                            </div>
                                            <h3>{el.price} com</h3>
                                            <p>{el.title}</p>
                                        </div>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                    <div className='shoeClothes--btn'>
                        <button onClick={() => setMore(mere+15)} style={
                            {
                                display: mere >= shew.length ? 'none' : 'block'
                            }
                        }>Показать ещё <AiOutlineArrowDown/></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shoe;