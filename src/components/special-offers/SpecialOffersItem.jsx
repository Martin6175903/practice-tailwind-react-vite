import React from 'react';
import armchairRecently from "../../../public/assets/recently/recently-armchair.png";

const SpecialOffersItem = () => {
    return (
        <div
            className="bg-white py-[25px] px-[35px] flex basis-[255px] flex-col gap-5 items-center text-center rounded-2xl hover:scale-[0.95] hover:cursor-pointer">
            <img src={armchairRecently} alt="Armchair Image Special Offers"/>
            <p className="item-info leading-[1.41] text-black">Парикмахерское кресло «Норм»
                гидравлическое</p>
            <p className="item-price text-[21px] tracking-wide font-medium">9 900 ₽</p>
            <button className="item-btn text-white bg-pink py-[9px] px-10 rounded-[30px] hover:bg-pink-hover">Купить
            </button>
        </div>
    );
};

export default SpecialOffersItem;