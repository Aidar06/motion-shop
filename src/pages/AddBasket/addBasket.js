import React, {useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {all} from "../../FackBackEnd/backEnd";

const AddBasket = () => {
    const {id} = useParams()

    let shoe = false

    function setShoe() {
        if (id > 90) {
            shoe = true
        } else {
            shoe = false
        }
    }

    setShoe()

    let obj = {}
    all.map(el => {
        if (el.id === +id) {
            obj = el
        }
    })

    const [M, setM] = useState(false)
    const [XL, setXL] = useState(false)
    const [XXL, setXXL] = useState(false)
    const [C, setC] = useState(false)
    const [S, setS] = useState(false)
    const [XS, setXS] = useState(false)
    let sizeArr = [setM, setXL, setXXL, setC, setS, setXS]
    let sizeArrVel = [M, XL, XXL, C, S, XS]
    let sizeArrVelSt = ['M', 'XL', 'XXL', 'C', 'S', 'XS']
    let sizeArrVelStShoe = ['34', '35', '36', '37', '38', '39']

    const clearSize = () => {
        for (let i = 0; i < sizeArr.length; i++) {
            sizeArr[i](false)
        }
    }
    const sizeText = () => {
        for (let i = 0; i < sizeArrVel.length; i++) {
            if (sizeArrVel[i]) {
                return shoe ? sizeArrVelStShoe[i] : sizeArrVelSt[i]
            }
        }
    }

    let arrCheckSize = []
    const checkSize = () => {
        sizeArrVel.map(el => {
            if (el === true) {
                arrCheckSize.push(el)
            }
        })
    }
    checkSize()


    const [black, setBlack] = useState(false)
    const [red, setRed] = useState(false)
    const [gray, setGray] = useState(false)
    const [blue, setBlue] = useState(false)
    let colorArr = [setBlack, setRed, setGray, setBlue]
    let colorArrVel = [black, red, gray, blue]
    let colorArrVelSt = ['чёрный', 'красный', 'серый', 'синий']
    const clearColor = () => {
        for (let i = 0; i < colorArr.length; i++) {
            colorArr[i](false)
        }
    }
    const colorText = () => {
        for (let i = 0; i < colorArrVel.length; i++) {
            if (colorArrVel[i]) {
                return colorArrVelSt[i]
            }
        }
    }

    let arrCheckColor = []
    const checkColor = () => {
        colorArrVel.map(el => {
            if (el === true) {
                arrCheckColor.push(el)
            }
        })
    }
    checkColor()

    function addBasket() {
        let clothes = JSON.parse(localStorage.getItem('clothes')) || []
        let newCloth = {
            id: clothes.length + 1,
            clothId: +id,
            title: obj.title,
            img: obj.img,
            price: obj.price,
            firstPrice: obj.price,
            size: sizeText(),
            color: colorText(),
            count: 1
        }

        clothes = [...clothes, newCloth]
        let cloth = localStorage.setItem('clothes', JSON.stringify(clothes))

    }


    let check = false

    function checkBasket() {
        let clothes = JSON.parse(localStorage.getItem('clothes')) || []
        for (let i = 0; i < clothes.length; i++) {
            if (clothes[i].clothId === +id && clothes[i].size === sizeText() && clothes[i].color === colorText()) {
                check = true
            }
        }
    }

    checkBasket()

    const [adding, setAdding] = useState(true)

    function addingBtn() {
        setAdding(false)
        setTimeout(() => {
            setAdding(true)
        }, 1500)
    }

    const [basketS, setBasketS] = useState(false)

    function addBtn() {


        addBasket()
        addingBtn()
    }

    const [choose, setChoose] = useState(false)

    return (
        <section id='addBasket'>
            <div className="container">
                <div className="addBasket">
                    <div className="addBasket--img">
                        <img src={obj.img} alt=""/>

                    </div>
                    <div className="addBasket--block">
                        <h1>{obj.title}</h1>
                        <h2>{obj.price} сом</h2>
                        <h5>Таблица размеров: <span>{sizeText()}</span></h5>
                        <div className='addBasket--block__size'>
                            <div onClick={() => {
                                clearSize();
                                setM(true)
                            }} style={{
                                border: `2px solid ${M ? "green" : ''}`,
                                color: M ? "green" : ''
                            }}>{shoe === false ? 'M' : '34'}</div>
                            <div onClick={() => {
                                clearSize();
                                setXL(true)
                            }} style={{
                                border: `2px solid ${XL ? "green" : ''}`,
                                color: XL ? "green" : ''
                            }}>{shoe === false ? 'XL' : '35'}</div>
                            <div onClick={() => {
                                clearSize();
                                setXXL(true)
                            }} style={{
                                border: `2px solid ${XXL ? "green" : ''}`,
                                color: XXL ? "green" : ''
                            }}>{shoe === false ? 'XXL' : '36'}</div>
                            <div onClick={() => {
                                clearSize();
                                setC(true)
                            }} style={{
                                border: `2px solid ${C ? "green" : ''}`,
                                color: C ? "green" : ''
                            }}>{shoe === false ? 'C' : '37'}</div>
                            <div onClick={() => {
                                clearSize();
                                setS(true)
                            }} style={{
                                border: `2px solid ${S ? "green" : ''}`,
                                color: S ? "green" : ''
                            }}>{shoe === false ? 'S' : '38'}</div>
                            <div onClick={() => {
                                clearSize();
                                setXS(true)
                            }} style={{
                                border: `2px solid ${XS ? "green" : ''}`,
                                color: XS ? "green" : ''
                            }}>{shoe === false ? 'XS' : '39'}</div>
                        </div>
                        <h5 className="addBasket--block__col">Цвет: <span>{colorText()}</span></h5>
                        <div className='addBasket--block__color'>
                            <div onClick={() => {
                                clearColor();
                                setBlack(true)
                            }} style={{border: `2px solid ${black ? "green" : ''}`}}
                                 className='addBasket--block__color--one'></div>
                            <div onClick={() => {
                                clearColor();
                                setRed(true)
                            }} style={{border: `2px solid ${red ? "green" : ''}`}}
                                 className='addBasket--block__color--two'></div>
                            <div onClick={() => {
                                clearColor();
                                setGray(true)
                            }} style={{border: `2px solid ${gray ? "green" : ''}`}}
                                 className='addBasket--block__color--three'></div>
                            <div onClick={() => {
                                clearColor();
                                setBlue(true)
                            }} style={{border: `2px solid ${blue ? "green" : ''}`}}
                                 className='addBasket--block__color--fore'></div>
                        </div>

                        <div className='addBasket--block__btn'>
                            <NavLink className='addBasket--block__btn--link' to={!check ? '' : '/basket'}>
                                <button onClick={() => {
                                    if (!check && arrCheckSize.length !== 0 && arrCheckColor.length !== 0) {
                                        addBtn()

                                    }
                                    !check && arrCheckSize.length !== 0 && arrCheckColor.length !== 0 ? addBtn() : setChoose(true)
                                }} style={{
                                    background: adding ? '' : 'green',
                                    color: adding ? '' : 'white'
                                }}>{adding ? check ? 'Перейти в корзину' : 'Добавить в корзину' : 'Добавлено'}</button>
                                <div className='addBasket--block__btn--link__check'>
                                    <div style={{display: arrCheckSize.length === 0 && choose ? '' : 'none'}}>
                                        <p>Пожалуйста, выберите размер!</p></div>
                                    <div style={{display: arrCheckColor.length === 0 && choose ? '' : 'none'}}>
                                        <p>Пожалуйста, выберите цвет!</p></div>
                                </div>
                            </NavLink>
                            <button>Купить сейчас</button>
                        </div>
                    </div>
                </div>
                <div className="addBasketDis">
                    <h1>Описание</h1>
                    <p><span>{obj.title}</span> — предмет нательной одежды для обоих полов, обычно не имеющий
                        пуговиц[1], воротника и карманов, с короткими рукавами, закрывающий туловище, часть рук и верх
                        бёдер, надевается через голову. Является одним из самых массовых видов одежды</p>
                </div>
            </div>
        </section>
    );
};

export default AddBasket;