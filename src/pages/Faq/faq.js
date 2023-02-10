import React, {useState} from 'react';

const Faq = () => {
    const [open,setOpen] = useState(false)
    const onToggle = event => {
        event.preventDefault()
        setOpen(!open)
    }

    const [open1,setOpen1] = useState(false)
    const onToggle1 = event => {
        event.preventDefault()
        setOpen1(!open1)
    }

    const [open2,setOpen2] = useState(false)
    const onToggle2 = event => {
        event.preventDefault()
        setOpen2(!open2)
    }

    return (
        <section id="accordion">
            <div className="container">
                <div className="accordion">
                    <div className="accordion--text-h1">
                        <h1>Часто задаваемые вопросы</h1>
                    </div>
                    <hr color="#72072D"/>
                    <details open={open} onClick={onToggle} className="accordion-text">
                        <summary>
                            <h1>Могу ли я отменить заказ?</h1>
                            <p style={{transform: open ? 'rotate(45deg)' : ''}}>+</p>
                        </summary>
                        <p>- Да, Вы можете отменить заказ в любой момент – до его отправки (полной или частичной).
                            Уведомление о статусе заказа придет к Вам на электронную почту.
                            Отменить заказ Вы можете по телефону 8 800 333 23 18
                        </p>
                    </details>
                    <hr/>
                    <details open={open1} onClick={onToggle1} className="accordion-text">
                        <summary>
                            <h1>Как я узнаю, что посылка доставлена?</h1>
                            <p style={{transform: open1 ? 'rotate(45deg)' : ''}}>+</p>
                        </summary>
                        <p>- После отправки посылки Вам будет отправлено смс или сообщение по электронной почте – именно поэтому так важно указывать
                            при регистрации и заказе верный номер мобильного телефона и адрес электронной почты.
                        </p>
                    </details>
                    <hr/>
                    <details open={open2} onClick={onToggle2} className="accordion-text">
                        <summary>
                            <h1>Можно ли вернуть не подошедший товар курьеру?</h1>
                            <p style={{transform: open2 ? 'rotate(45deg)' : ''}}>+</p>
                        </summary>
                        <p>- Вы можете либо полностью отказаться от выкупа посылки, либо, оплатив посылку курьеру, вернуть нам неподошедший товар.
                            Подробнее об условиях и особенностях возврата смотрите в разделе «Условия возврата».
                        </p>
                    </details>
                    <hr/>
                </div>
            </div>
        </section>
    );
};

export default Faq;