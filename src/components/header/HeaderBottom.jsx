import React from 'react';

const HeaderBottom = () => {
    return (
        <div className="bg-white">
            <div className="container">
                <ul className="py-[30px] flex justify-center items-center gap-10 text-[16px]">
                    <li><a href="#">Парикмахерская</a></li>
                    <li><a href="#">Барбершоп</a></li>
                    <li><a href="#">Маникюр</a></li>
                    <li><a href="#">Педикюр</a></li>
                    <li><a href="#">Массаж</a></li>
                    <li><a href="#">Мебель</a></li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderBottom;