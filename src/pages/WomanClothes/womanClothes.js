import React, {useState} from 'react';
import {HiArrowLongDown, HiArrowLongRight} from "react-icons/hi2";
import {NavLink} from "react-router-dom";
import {woman, womanf} from "../../FackBackEnd/backEnd";
import {AiOutlineArrowDown} from "react-icons/ai";
// import {NavLink} from "react-router-dom";

const WomanClothes = () => {
    const [mere,setMore] = useState(15)
    return (
        <section id="womanClothes">
            <div className="container">
                <div className="womanClothes">
                    <div className='womanClothes--category'>
                        <div className='womanClothes--category__block own'>
                            <NavLink to={'/man'}>
                                <div className='womanClothes--category__block--bg'>
                                    <div className='womanClothes--category__block--bg__text'>
                                        <h1>Мужская</h1>
                                        <HiArrowLongRight className='manClothes--category__block--bg__text--icon'/>
                                    </div>
                                </div>
                            </NavLink>
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
                            <NavLink to={'/children'}>
                                <div className='womanClothes--category__block--bg'>
                                    <div className='womanClothes--category__block--bg__text'>
                                        <h1>Детская</h1>
                                        <HiArrowLongRight className='manClothes--category__block--bg__text--icon'/>
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                        <div className='womanClothes--category__block four'>
                            <NavLink to={'/shoe'}>
                                <div className='womanClothes--category__block--bg'>
                                    <div className='womanClothes--category__block--bg__text'>
                                        <h1>Обувь</h1>
                                        <HiArrowLongRight className='manClothes--category__block--bg__text--icon'/>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <h1 className='womanClothes--title'>Женская одежда</h1>
                    <div className="womanClothes--group">
                        {
                            woman.slice(0,mere).map(el => {
                                return(
                                    <NavLink to={`/addBasket/${el.id}`} key={el.id}>
                                        <div className='womanClothes--group__block'>
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
                    <div className='womanClothes--btn'>
                        <button onClick={() => setMore(mere+15)} style={
                            {
                                display: mere >= woman.length ? 'none' : 'block'
                            }
                        }>Показать ещё <AiOutlineArrowDown/></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WomanClothes;