import React from 'react';
import armchairRecently from "../../assets/recently/recently-armchair.png";

const Recently = () => {
    return (
        <section className="pt-[80px] pb-[100px]">
            <div className="container">
                <h4 className="pb-[38px] title">Вы недавно смотрели</h4>
                <div className="flex gap-[30px]">
                    <div
                        className="bg-white py-[25px] px-[35px] flex basis-[255px] flex-col gap-5 items-center text-center">
                        <img src={armchairRecently} alt="Armchair Image Special Offers"/>
                        <p className="item-info leading-[1.41] text-black">Парикмахерское кресло «Норм»
                            гидравлическое</p>
                        <p className="item-price text-[21px] tracking-wide font-medium">9 900 ₽</p>
                        <button className="item-btn text-white bg-pink py-[9px] px-10 rounded-[30px]">Купить</button>
                    </div>
                    <div
                        className="bg-white py-[25px] px-[35px] flex basis-[255px] flex-col gap-5 items-center text-center">
                        <img src={armchairRecently} alt="Armchair Image Special Offers"/>
                        <p className="item-info leading-[1.41] text-black">Парикмахерское кресло «Норм»
                            гидравлическое</p>
                        <p className="item-price text-[21px] tracking-wide font-medium">9 900 ₽</p>
                        <button className="item-btn text-white bg-pink py-[9px] px-10 rounded-[30px]">Купить</button>
                    </div>
                    <div
                        className="bg-white py-[25px] px-[35px] flex basis-[255px] flex-col gap-5 items-center text-center">
                        <img src={armchairRecently} alt="Armchair Image Special Offers"/>
                        <p className="item-info leading-[1.41] text-black">Парикмахерское кресло «Норм»
                            гидравлическое</p>
                        <p className="item-price text-[21px] tracking-wide font-medium">9 900 ₽</p>
                        <button className="item-btn text-white bg-pink py-[9px] px-10 rounded-[30px]">Купить</button>
                    </div>
                    <div
                        className="bg-white py-[25px] px-[35px] flex basis-[255px] flex-col gap-5 items-center text-center">
                        <img src={armchairRecently} alt="Armchair Image Special Offers"/>
                        <p className="item-info leading-[1.41] text-black">Парикмахерское кресло «Норм»
                            гидравлическое</p>
                        <p className="item-price text-[21px] tracking-wide font-medium">9 900 ₽</p>
                        <button className="item-btn text-white bg-pink py-[9px] px-10 rounded-[30px]">Купить</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recently;