import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

const Basket = () => {

    let clothes = JSON.parse(localStorage.getItem('clothes')) || []

    let check = true

    function setCheck() {
        if (clothes.length === 0) {
            check = false
        } else {
            check = true
        }
    }

    setCheck()

    const [date, setDate] = useState(true)

    function apDate() {
        setDate(false)
    }

    const [num, setNum] = useState(0)


    function removeClothes() {
        let clothes = JSON.parse(localStorage.getItem('clothes'))

        clothes = clothes.filter(el => {
            return el.id !== num
        })

        let cloth = localStorage.setItem('clothes', JSON.stringify(clothes))
        apDate()
    }

    function plusCount() {
        let n = []
        let clothes = JSON.parse(localStorage.getItem('clothes'))

        clothes = clothes.map(el => {
            if (el.id === num) {
                el.count += 1
                el.price += el.firstPrice
                n.push(el)
            } else {
                n.push(el)
            }
        })

        clothes = n
        let cloth = localStorage.setItem('clothes', JSON.stringify(clothes))
        apDate()
    }

    function minusCount() {
        let n = []
        let clothes = JSON.parse(localStorage.getItem('clothes'))

        clothes = clothes.map(el => {
            if (el.id === num && el.count > 1) {
                el.count -= 1
                el.price -= el.firstPrice
                n.push(el)
            } else {
                n.push(el)
            }
        })

        clothes = n
        let cloth = localStorage.setItem('clothes', JSON.stringify(clothes))
        apDate()
    }

    let newMoney = 0

    function gerMoneyCount() {
        let clothes = JSON.parse(localStorage.getItem('clothes')) || []

        clothes.map(el => {
            newMoney += el.price
        })
    }

    gerMoneyCount()

    const [own, setOwn] = useState(true)

    return (
        <section id='basket'>
            <h4 style={{display: check ? '' : "none"}}>???????????????????? ????????????</h4>
            <div className="container">

                <h1 className='basket-text'
                    style={{display: check === false ? 'block' : "none"}}>
                    ?? ?????????????? ???????????? ???? ??????????????!
                </h1>

                <div className="basket" style={{display: check ? '' : "none"}}>
                    <div className="basket--tap">
                        <div className='basket--tap__nav'>
                            <NavLink to={''}>
                                <h2 className='basket--tap__nav--of'>????????????????????</h2>
                            </NavLink>
                            <div></div>
                            <NavLink to={'/mobBasket'}>
                                <h2 className='basket--tap__nav--basket'>?????? ?? ???????? ?? ???????????????</h2>
                            </NavLink>
                        </div>
                        <h3>?????????? ??????????: <span>{newMoney} ??????</span></h3>
                    </div>

                    <div className="basket--block">

                        <div className="basket--block__group">
                            <div className="basket--block__group--input">
                                <h2>?????????????????? ????????????</h2>
                                <input type="text" placeholder='??????*'/>
                                <input type="text" placeholder='??????????????*'/>
                                <input type="text" placeholder='E-Mail*'/>
                                <input type="tel" placeholder='??????????????*'/>
                            </div>
                            <div className="basket--block__group--del">
                                <label for="own"></label>
                                <label for="order"></label>
                                <h2>????????????????</h2>
                                <p>???????????????? ?????????????? ???????????? ???????????????? ?????? ?????????? ????????????.</p>
                                <div>
                                    <input onClick={() => {
                                        setOwn(true)
                                    }} type="radio" name='tabs' id='own'/>
                                    <label htmlFor="own"><h5>??????????????????</h5></label>
                                </div>
                                <div>
                                    <input onClick={() => {
                                        setOwn(false)
                                    }} type="radio" name='tabs' id='order'/>
                                    <label htmlFor="order"><h5>???????????????? ????????????????</h5></label>
                                </div>
                                {
                                    own ?
                                        <select>
                                            <option>????????????</option>
                                            <option>????????</option>
                                            <option>????????????</option>
                                            <option>????</option>
                                        </select>
                                        :
                                        <input type="text" className='basket--block__group--del__ad'
                                               placeholder='??????????????, ?????????? (??????????, ????????), ??????????, ?????????, ????.???*'/>
                                }
                            </div>
                        </div>

                        <div className="basket--block__group">
                            <div className="basket--block__group--pay">
                                <h2>????????????</h2>
                                <div className="basket--block__group--pay__order">
                                    <input type="radio" name='tabs' id='mon'/>
                                    <label htmlFor='mon'><p>???????????? ?????????????????? ?????? ?????????????????? <br/> ????????????</p></label>
                                </div>
                                <button>????????????????</button>

                                <div className="basket--block__group--pay__order">
                                    <input type="radio" name='tabs' id='bank'/>
                                    <label htmlFor='bank'><p>???????????? ?? ???????????????????? ???????????? ?????????? <br/>
                                        <span>PayBox</span></p></label>
                                </div>
                                <button>????????????????</button>
                            </div>

                            <div className="basket--block__group--payTwo">
                                <div className="basket--block__group--payTwo__card">
                                    <div>
                                        <h5>?????????? ??????????:</h5>
                                        <h4><span>{newMoney}</span> ??????</h4>
                                    </div>
                                    <p>?????? ???? ????????????????</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basket--group">
                        {
                            date ? clothes.map(el => {
                                return (
                                    <div onMouseMove={() => setNum(el.id)} className='basket--group__cloth'
                                         key={el.id}>
                                        <div className='basket--group__cloth--img'>
                                            <NavLink to={`/addBasket/${el.clothId}`} key={el.clothId}>
                                                <img src={el.img} alt=""/>
                                            </NavLink>
                                        </div>
                                        <div className='basket--group__cloth--info'>
                                            <h1>{el.title}</h1>
                                            <h4>??????????: <span>{el.size}</span>, <span>{el.color}</span></h4>
                                            <h2>{el.price} ??????</h2>
                                            <div className='basket--group__cloth--info__count'>
                                                <div onClick={() => minusCount()}>-</div>
                                                <p>{el.count}</p>
                                                <div onClick={() => plusCount()}>+</div>
                                            </div>
                                            <h3 onClick={() => {
                                                removeClothes()
                                            }}>??????????????</h3>
                                        </div>
                                    </div>
                                )
                            }) : setDate(true)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Basket;