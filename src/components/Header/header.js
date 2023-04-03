import React, {useEffect, useState} from 'react';
import {BsSearch, BsQuestionCircle, BsArrowUp} from "react-icons/bs";
import {HiOutlineClipboardDocumentList} from "react-icons/hi2";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {NavLink} from "react-router-dom";
import Search from "../modalSearch/search";
import BurgerMenu from "../BurgerMenu/burgerMenu";
import {BiMenuAltLeft} from "react-icons/bi";
import Searcher from "../../pages/Searcher/searcher";


const Header = () => {

    const [search, setSearch] = useState(false)
    const [burger, setBurger] = useState(false)
    const [input, setInput] = useState('')


    const scrollTo = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    


    let textInput = React.createRef()

    const showInput = () => {
        setInput(textInput.current.value)
    }

    useEffect(() => {
        localStorage.setItem('text', JSON.stringify(input))
    }, [input])


    return (
        <header id="header">
            <Search search={search}/>
            <BurgerMenu burger={burger} setBurger={setBurger}/>
            <div className="container">
                <div className="navbar">
                    <BiMenuAltLeft className='navbar--icon' onClick={() => setBurger(true)}/>
                    <NavLink to={'/'}>
                        <h1>MOTION <span>SHOP</span></h1>
                    </NavLink>

                    <div className='navbar--search'>
                        <input onInput={showInput} ref={textInput} type="text" placeholder="Я ищу..."/>
                        <NavLink className='navbar--search__icon' to={'/searcher'}>
                            <BsSearch/>
                        </NavLink>
                    </div>

                    <nav className='navbar--nav'>
                        <NavLink to={'/faq'}>
                            <div className='navbar--nav__block'>
                                <BsQuestionCircle className='navbar--nav__block--icon'/>
                                <h3>FAQ</h3>
                            </div>
                        </NavLink>

                        <NavLink to={'/aboutUs'}>
                            <div className='navbar--nav__block'>
                                <HiOutlineClipboardDocumentList className='navbar--nav__block--icon'/>
                                <h3>О нас</h3>
                            </div>
                        </NavLink>

                        <NavLink to={'/basket'}>
                            <div className='navbar--nav__block'>
                                <AiOutlineShoppingCart className='navbar--nav__block--icon'/>
                                <h3>Корзина</h3>
                            </div>
                        </NavLink>
                    </nav>

                    <div className='navbar--nav__block searchRel' onClick={() => setSearch(!search)}>
                        <BsSearch className='navbar--nav__block--icon'/>
                    </div>

                </div>
            </div>
            <div className='headerUp' onClick={scrollTo}>
                <BsArrowUp className='headerUp--icon'/>
            </div>
        </header>
    );
};


export default Header;