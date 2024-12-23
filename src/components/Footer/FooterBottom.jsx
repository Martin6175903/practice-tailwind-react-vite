import React from 'react';

const FooterBottom = () => {
    return (
        <div className="container max-[850px]:text-center">
            <div className="flex gap-5 py-[25px] justify-between items-center flex-wrap text-[12px] text-dark-gray max-[850px]:justify-center">
                <p>Лучший магазин (с) 2019 Все права защищены. Интернет-магазин оборудования для салонов красоты</p>
                <a className="hover:text-pink" href="#">Политика конфиденциальности</a>
            </div>
        </div>
    );
};

export default FooterBottom;