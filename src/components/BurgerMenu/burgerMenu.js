import React from 'react';
import {NavLink} from "react-router-dom";
import {BsQuestionCircle} from "react-icons/bs";
import {HiOutlineClipboardDocumentList} from "react-icons/hi2";
import {AiOutlineClose, AiOutlineShoppingCart} from "react-icons/ai";

const BurgerMenu = ({burger, setBurger}) => {
    return (
        <div className='menu' style={{
            left: !burger ? '-2000px' : '0'
        }}>
            <div className='burgerMenu'>
                <div className='burgerMenu--group'>
                    <NavLink to={'/'}>
                        <h1 onClick={() => setBurger(!burger)}>MOTION SHOP</h1>
                    </NavLink>
                    <AiOutlineClose className='burgerMenu--group__icon' onClick={() => setBurger(!burger)}/>
                </div>
                <NavLink to={'/faq'}>
                    <div className='burgerMenu--block' onClick={() => setBurger(!burger)}>
                        <BsQuestionCircle className='burgerMenu--block__icon'/>
                        <h3>FAQ</h3>
                    </div>
                </NavLink>
                <NavLink to={'/aboutUs'}>
                    <div className='burgerMenu--block' onClick={() => setBurger(!burger)}>
                        <HiOutlineClipboardDocumentList className='burgerMenu--block__icon'/>
                        <h3>О нас</h3>
                    </div>
                </NavLink>
                <NavLink to={'/basket'}>
                    <div className='burgerMenu--block' onClick={() => setBurger(!burger)}>
                        <AiOutlineShoppingCart className='burgerMenu--block__icon'/>
                        <h3>Корзина</h3>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default BurgerMenu;