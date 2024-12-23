import React from 'react';

const HeaderTop = () => {
    return (
        <div className="bg-gray py-4">
            <div className="container">
                <nav>
                    <ul className="flex justify-center items-center gap-[30px]">
                        <li><a href="#">Доставка</a></li>
                        <li><a href="#">Оплата</a></li>
                        <li><a href="#">Отзывы</a></li>
                        <li><a href="#">Вопрос - ответ</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default HeaderTop;