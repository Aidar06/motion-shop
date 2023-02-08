import React from 'react';
import {useParams} from "react-router-dom";
import {all} from "../../FackBackEnd/backEnd";

const AddBasket = () => {
    const {id} = useParams()
    let obj = {}
    all.map(el => {
        if (el.id === +id){
            obj = el
        }
    })

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
                        <h5>Таблица размеров:</h5>
                        <div className='addBasket--block__size'>
                            <div>M</div>
                            <div className="addBasket--block__size--xl">XL</div>
                            <div className="addBasket--block__size--xxl">XXL</div>
                            <div className="addBasket--block__size--cc">C</div>
                            <div className="addBasket--block__size--ss">S</div>
                            <div className="addBasket--block__size--xs">XS</div>
                        </div>
                        <h5 className="addBasket--block__col">Цвет:</h5>
                        <div className='addBasket--block__color'>
                            <div className='addBasket--block__color--one'></div>
                            <div className='addBasket--block__color--two'></div>
                            <div className='addBasket--block__color--three'></div>
                            <div className='addBasket--block__color--fore'></div>
                        </div>

                        <div className='addBasket--block__btn'>
                            <button>Добавить в корзину</button>
                            <button>Купить сейчас</button>
                        </div>
                    </div>
                </div>
                <div className="addBasketDis">
                    <h1>Описание</h1>
                    <p>  <span>{obj.title}</span> — предмет нательной одежды для обоих полов, обычно не имеющий пуговиц[1], воротника и карманов, с короткими рукавами, закрывающий туловище, часть рук и верх бёдер, надевается через голову. Является одним из самых массовых видов одежды</p>
                </div>
            </div>
        </section>
    );
};

export default AddBasket;