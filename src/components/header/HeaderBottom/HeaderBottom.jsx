import React from 'react';
import HeaderLink from "../HeaderLink.jsx";

const HeaderBottom = () => {
    return (
        <div className="bg-white">
            <div className="container">
                <ul className="py-[30px] flex justify-center items-center gap-10 text-[16px] max-md:gap-5 max-md:flex-wrap max-[480px]:flex-col">
                    <HeaderLink title="Парикмахерская"/>
                    <HeaderLink title="Барбершоп"/>
                    <HeaderLink title="Маникюр"/>
                    <HeaderLink title="Педикюр"/>
                    <HeaderLink title="Массаж"/>
                    <HeaderLink title="Мебель"/>
                </ul>
            </div>
        </div>
    );
};

export default HeaderBottom;