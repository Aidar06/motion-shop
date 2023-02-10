import React, {useState} from 'react';
import {HiArrowLongDown, HiArrowLongRight} from "react-icons/hi2";
import {NavLink} from "react-router-dom";
import {children} from "../../FackBackEnd/backEnd";
import {AiOutlineArrowDown} from "react-icons/ai";

const ChildrenClothes = () => {
    const [mere,setMore] = useState(15)
    return (
        <section id="childrenClothes">
            <div className="container">
                <div className="childrenClothes">
                    <div className='childrenClothes--category'>
                        <div className='childrenClothes--category__block own'>
                            <NavLink to={'/man'}>
                                <div className='childrenClothes--category__block--bg'>
                                    <div className='childrenClothes--category__block--bg__text'>
                                        <h1>Мужская</h1>
                                        <HiArrowLongRight className='manClothes--category__block--bg__text--icon'/>
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                        <div className='childrenClothes--category__block two'>
                            <NavLink to={'/woman'}>
                                <div className='childrenClothes--category__block--bg'>
                                    <div className='childrenClothes--category__block--bg__text'>
                                        <h1>Женская</h1>
                                        <HiArrowLongRight className='manClothes--category__block--bg__text--icon'/>
                                    </div>
                                </div>
                            </NavLink>
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
                            <NavLink to={'/shoe'}>
                                <div className='childrenClothes--category__block--bg'>
                                    <div className='childrenClothes--category__block--bg__text'>
                                        <h1>Обувь</h1>
                                        <HiArrowLongRight className='manClothes--category__block--bg__text--icon'/>
                                    </div>
                                </div>
                            </NavLink>

                        </div>

                    </div>
                    <h1 className='childrenClothes--title'>Детская одежда</h1>
                    <div className="childrenClothes--group">
                        {
                            children.slice(0,mere).map(el => {
                                return(
                                    <NavLink to={`/addBasket/${el.id}`} key={el.id}>
                                        <div className='childrenClothes--group__block'>
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
                    <div className='childrenClothes--btn'>
                        <button onClick={() => setMore(mere+15)} style={
                            {
                                display: mere >= children.length ? 'none' : 'block'
                            }
                        }>Показать ещё <AiOutlineArrowDown/></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChildrenClothes;