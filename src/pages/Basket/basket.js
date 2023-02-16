import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

const Basket = () => {

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
                n.push(el)
            }else{
                n.push(el)
            }
        })

        clothes = n
        let cloth = localStorage.setItem('clothes',JSON.stringify(clothes))
        apDate()
    }

    return (
        <section id='basket'>
            <div className="container">
                <h1 className='basket-text' style={{display: check === false?'block':"none"}}>В корзине ничего не найдено!</h1>
                <div className="basket" style={{display: check?'':"none"}}>
                    <div className="basket--block">
                        <div className="basket--block__group">
                            <div className="basket--block__group--input">
                                <h2>Контакные данные</h2>
                                <input type="text" placeholder='Имя*'/>
                                <input type="text" placeholder='Фамилия*'/>
                                <input type="text" placeholder='E-Mail*'/>
                                <input type="tel" placeholder='Телефон*'/>
                            </div>
                            <div className="basket--block__group--del">
                                <h2>Доставка</h2>
                                <p>Выберите удобный способ доставки для этого заказа.</p>
                                <div>
                                    <input type="radio"/>
                                    <h5>Самовывоз</h5>
                                </div>
                                <div>
                                    <input type="radio" id='test'/>
                                    <h5>Доставка курьером</h5>
                                </div>
                                <input type="text" className='basket--block__group--del__ad' placeholder='Область, город (район, село), улица, дом№, кв.№*'/>
                            </div>
                        </div>
                        <div className="basket--block__group">
                            <div className="basket--block__group--pay">
                                <h2>Оплата</h2>
                                <div className="basket--block__group--pay__order">
                                    <input type="radio"/>
                                    <p>Оплачу наличными при получении заказа</p>
                                </div>
                                <p>Оплата с банковской картой через <span>PayBox</span></p>
                                <button>Оплатить</button>
                            </div>
                            <div className="basket--block__group--payTwo">
                                <div className="basket--block__group--payTwo__card">
                                    <div>
                                        <h5>Общая сумма:</h5>
                                        <h4>3000 сом</h4>
                                    </div>
                                    <p>Ещё не оплачено</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basket--group">
                        {
                            date ? clothes.map(el => {
                                return(
                                    <div onMouseMove={() => setNum(el.id)} className='basket--group__cloth' key={el.id}>
                                                  <div className='basket--group__cloth--img'>
                                                      <NavLink to={`/addBasket/${el.clothId}`}>
                                                          <img src={el.img} alt=""/>
                                                      </NavLink>
                                                  </div>
                                                  <div className='basket--group__cloth--info'>
                                                      <h1>{el.title}</h1>
                                                      <h4>Опции: <span>{el.size}</span>, <span>{el.color}</span></h4>
                                                      <h2>{el.price} сом</h2>
                                                      <div className='basket--group__cloth--info__count'>
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
                </div>
            </div>
        </section>
    );
};

export default Basket;