import React, {useState} from 'react';
import {all} from "../../../FackBackEnd/backEnd";
import {NavLink} from "react-router-dom";
import {AiOutlineArrowDown} from "react-icons/ai";


const MainClothes = () => {
    const [mere,setMore] = useState(15)
    return (
        <section id='mainClothes'>
            <div className="container">
                <div className="mainClothes">
                    <h1>Возможно, Вам понравится</h1>

                    <div className="mainClothes--group">
                        {
                            all.slice(0,mere).map(el => {
                                return(
                                    <NavLink to={`/addBasket/${el.id}`} key={el.id}>
                                        <div className='mainClothes--group__block'>
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
                    <div className='mainClothes--btn'>
                        <button onClick={() => setMore(mere+15)} style={
                            {
                                display: mere >= all.length ? 'none' : 'block'
                            }
                        }>Показать ещё <AiOutlineArrowDown/></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainClothes;