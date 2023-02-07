import React from 'react';
import {BsSearch, BsQuestionCircle} from "react-icons/bs";
import {HiOutlineClipboardDocumentList} from "react-icons/hi2";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {RxHamburgerMenu} from "react-icons/rx";
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
         <header id="header">
            <div className="container">
                <div className="header">

                     <NavLink to={"/"}><h1>MOTION SHOP</h1></NavLink>
                     <div className="header--search">
                         <input type="text" placeholder="Я ищу..."/>
                         <BsSearch className='BsSearch'/>
                     </div>

                     <form action="" className="search-form">
                         <input type="search" name="" placeholder="search here..." id="search-box"/>
                     </form>

                     <form action="" className="header--search-form">
                         <input type="search" name="" placeholder="Я ищу..." id="search-box" className="header--form__box"/>
                     </form>

                     <nav className="header--nav">
                         <div className="header--nav__faq">
                             <BsQuestionCircle className="BsQuestionCircle"/>
                             <NavLink to={"/faq"}>FAQ</NavLink>
                         </div>
                         <div className="header--nav__about">
                             <HiOutlineClipboardDocumentList className="HiOutlineClipboardDocumentList"/>
                             <NavLink to={"/aboutUs"}>О нас</NavLink>
                         </div>
                         <div className="header--nav__shop">
                             <AiOutlineShoppingCart className="AiOutlineShoppingCart"/>
                             <NavLink to={"/basket"}>Корзина</NavLink>
                         </div>
                    </nav>
                </div>
            </div>
        </header>

    );
};

export default Header;