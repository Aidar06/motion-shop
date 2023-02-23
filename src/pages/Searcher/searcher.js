import React, {useEffect, useState} from 'react';
import {allProMax} from "../../FackBackEnd/backEnd";
import {NavLink} from "react-router-dom";

const Searcher = () => {

    const [block, setBlock] = useState(true)
    const [text, setText] = useState()

    setInterval(() => {
        setText(JSON.parse(localStorage.getItem('text')))
    }, 1000)

    useEffect(() => {
        allProMax.map(el => {
            if (el.title !== text) {
                setBlock(true)
            }
        })
    }, [text])

    useEffect(() => {
        allProMax.map(el => {
            if (el.title === text) {
                setBlock(false)
            }
        })
    }, [text])


    return (
        <section id='searcher'>
            <div className="container">
                <div className="searcher">
                    <h1 style={{display: block ? 'block' : 'none'}} className='searcher--text'>
                        По вашему запросу ничего не найдено
                    </h1>
                    <div className="searcher--group">
                        {
                            allProMax.map(el => {
                                if (el.title === text) {
                                    return (
                                        <NavLink to={`/addBasket/${el.id}`} key={el.id}>
                                            <div className='searcher--group__block'>
                                                <div>
                                                    <img src={el.img} alt=""/>
                                                </div>
                                                <h3>{el.price} com</h3>
                                                <p>{el.title}</p>
                                            </div>
                                        </NavLink>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Searcher;