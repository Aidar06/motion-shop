import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

const MobileBasket = () => {
    let clothes = JSON.parse(localStorage.getItem('clothes')) || []

    let check = true
    function setCheck(){
        if (clothes.length === 0){
            check = false
        }else {
            check = true
        }
    }
    setCheck()

    const [date,setDate] = useState(true)
    function apDate(){
        setDate(false)
    }

    const [num,setNum] = useState(0)
    function removeClothes(){
        let clothes = JSON.parse(localStorage.getItem('clothes'))

        clothes = clothes.filter(el => {
            return el.id !== num
        })

        let cloth = localStorage.setItem('clothes',JSON.stringify(clothes))
        apDate()
    }

    function plusCount(){
        let n = []
        let clothes = JSON.parse(localStorage.getItem('clothes'))

        clothes = clothes.map(el => {
            if (el.id === num){
                el.count += 1
                el.price += el.firstPrice
                n.push(el)
            }else{
                n.push(el)
            }
        })

        clothes = n
        let cloth = localStorage.setItem('clothes',JSON.stringify(clothes))
        apDate()
    }

    function minusCount(){
        let n = []
        let clothes = JSON.parse(localStorage.getItem('clothes'))

        clothes = clothes.map(el => {
            if (el.id === num && el.count > 1){
                el.count -= 1
                el.price -= el.firstPrice
                n.push(el)
            }else{
                n.push(el)
            }
        })

        clothes = n
        let cloth = localStorage.setItem('clothes',JSON.stringify(clothes))
        apDate()
    }

    let newMoney = 0
    function gerMoneyCount(){
        let clothes = JSON.parse(localStorage.getItem('clothes')) || []

        clothes.map(el => {
            newMoney += el.price
        })
    }

    gerMoneyCount()
    return (
        <section id='mobBasket'>
            <div className="container">
                <div className="mobBasket">
                    <div className="mobBasket--tap">
                        <div className='mobBasket--tap__nav'>
                            <NavLink to={'/basket'}>
                                <h2 className='mobBasket--tap__nav--of'>Оформление</h2>
                            </NavLink>
                            <div></div>
                            <NavLink to={''}>
                                <h2 className='mobBasket--tap__nav--basket'>Что у меня в корзине?</h2>
                            </NavLink>
                        </div>
                        <h3>Общая сумма:    <span>{newMoney} сом</span></h3>
                    </div>
                    <div className='mobBasket--group'>
                        {
                            date ? clothes.map(el => {
                                return(
                                    <div onMouseMove={() => setNum(el.id)} className='mobBasket--group__cloth' key={el.id}>
                                        <div className='mobBasket--group__cloth--img'>
                                            <NavLink to={`/addBasket/${el.clothId}`} key={el.clothId}>
                                                <img src={el.img} alt=""/>
                                            </NavLink>
                                        </div>
                                        <div className='mobBasket--group__cloth--info'>
                                            <h1>{el.title}</h1>
                                            <h4>Опции: <span>{el.size}</span>, <span>{el.color}</span></h4>
                                            <h2>{el.price} сом</h2>
                                            <div className='mobBasket--group__cloth--info__count'>
                                                <div onClick={()=> minusCount()}>-</div>
                                                <p>{el.count}</p>
                                                <div onClick={()=> plusCount()}>+</div>
                                            </div>
                                            <h3 onClick={()=> {removeClothes()}}>Удалить</h3>
                                        </div>
                                    </div>
                                )
                            }) : setDate(true)
                        }
                    </div>
                    <NavLink to={'/'} className='mobBasket--btn'>
                        <button>+ Добавить товар</button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default MobileBasket;