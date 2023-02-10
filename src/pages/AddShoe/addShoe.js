import React from 'react';
import {useParams} from "react-router-dom";
import {shew} from "../../FackBackEnd/backEnd";

const AddShoe = () => {
    const {id} = useParams()
    let obj = {}
    shew.map(el => {
        if (el.id === +id){
            obj = el
        }
    })

    return (
        <section id='addShoe'>
            <div className="container">
                <div className="addShoe">
                    <div className="addShoe--img">
                        <img src={obj.img} alt=""/>
                    </div>
                    <div className="addShoe--block">
                        <h1>{obj.title}</h1>
                        <h2>{obj.price} сом</h2>
                        <h5>Таблица размеров:</h5>
                        <div className='addShoe--block__size'>
                            <div>34</div>
                            <div className="addShoe--block__size--xl">35</div>
                            <div className="addShoe--block__size--xxl">36</div>
                            <div className="addShoe--block__size--cc">37</div>
                            <div className="addShoe--block__size--ss">38</div>
                            <div className="addShoe--block__size--xs">39</div>
                        </div>
                        <h5 className="addShoe--block__col">Цвет:</h5>
                        <div className='addShoe--block__color'>
                            <div className='addShoe--block__color--one'></div>
                            <div className='addShoe--block__color--two'></div>
                            <div className='addShoe--block__color--three'></div>
                            <div className='addShoe--block__color--fore'></div>
                        </div>

                        <div className='addShoe--block__btn'>
                            <button>Добавить в корзину</button>
                            <button>Купить сейчас</button>
                        </div>
                    </div>
                </div>
                <div className="addShoeDis">
                    <h1>Описание</h1>
                    <p>  <span>{obj.title}</span> — предмет нательной одежды для обоих полов, обычно не имеющий пуговиц[1], воротника и карманов, с короткими рукавами, закрывающий туловище, часть рук и верх бёдер, надевается через голову. Является одним из самых массовых видов одежды</p>
                </div>
            </div>
        </section>
    );
};

export default AddShoe;