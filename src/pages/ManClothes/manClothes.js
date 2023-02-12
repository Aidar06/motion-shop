import React, {useState} from 'react';
import {HiArrowLongDown, HiArrowLongRight} from "react-icons/hi2";
import {NavLink} from "react-router-dom";
import {man} from "../../FackBackEnd/backEnd";
import {AiOutlineArrowDown} from "react-icons/ai";


const ManClothes = () => {
    const [mere,setMore] = useState(15)
    return (
        <section id="manClothes">
            <div className="container">
                <div className="manClothes">
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
                            <NavLink to={'/woman'}>
                                <div className='manClothes--category__block--bg'>
                                    <div className='manClothes--category__block--bg__text'>
                                        <h1>Женская</h1>
                                        <HiArrowLongRight className='manClothes--category__block--bg__text--icon'/>
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                        <div className='manClothes--category__block three'>
                            <NavLink to={'/children'}>
                                <div className='manClothes--category__block--bg'>
                                    <div className='manClothes--category__block--bg__text'>
                                        <h1>Детская</h1>
                                        <HiArrowLongRight className='manClothes--category__block--bg__text--icon'/>
                                    </div>
                                </div>
                            </NavLink>

                        </div>

                        <div className='manClothes--category__block four'>
                            <NavLink to={'/shoe'}>
                                <div className='manClothes--category__block--bg'>
                                    <div className='manClothes--category__block--bg__text'>
                                        <h1>Обувь</h1>
                                        <HiArrowLongRight className='manClothes--category__block--bg__text--icon'/>
                                    </div>
                                </div>
                            </NavLink>

                        </div>
                    </div>
                    <h1 className='manClothes--title'>Мужская одежда</h1>
                    <div className="manClothes--group">
                        {
                            man.slice(0,mere).map(el => {
                                return(
                                    <NavLink to={`/addBasket/${el.id}`} key={el.id}>
                                        <div className='manClothes--group__block'>
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
                    <div className='manClothes--btn'>
                        <button onClick={() => setMore(mere+15)} style={
                            {
                                display: mere >= man.length ? 'none' : 'block'
                            }
                        }>Показать ещё <AiOutlineArrowDown/></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManClothes;