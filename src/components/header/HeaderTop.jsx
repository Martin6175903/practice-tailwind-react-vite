import React from 'react';
import HeaderLink from "./HeaderLink.jsx";

const HeaderTop = () => {
    return (
        <div className="bg-gray py-4">
            <div className="container">
                <nav>
                    <ul className="flex justify-center items-center gap-[30px] flex-wrap max-[768px]:gap-[15px]">
                        <HeaderLink title="Доставка"/>
                        <HeaderLink title="Оплата"/>
                        <HeaderLink title="Отзывы"/>
                        <HeaderLink title="Вопрос - ответ"/>
                        <HeaderLink title="Контакты"/>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default HeaderTop;