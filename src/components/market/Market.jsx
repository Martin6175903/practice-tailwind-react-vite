import React from 'react';
import emailImage from "../../../public/assets/market/mail.svg";
import deliveryImage from "../../../public/assets/market/delivery.svg";

const Market = () => {
    return (
        <section className="text-white">
            <div className="container">
                <div className="items flex justify-center gap-[30px] max-md:flex-col max-md:text-center">
                    <div className="item py-[35px] px-10 bg-pink w-full rounded-2xl max-md:p-[15px]">
                        <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-10">
                            <div>
                                <h3 className="title text-[18px] font-bold">Получайте бонусы и подарки</h3>
                                <p className="subtitle leading-[1.41] my-[25px] max-w-[231px] hover:scale-110 hover:cursor-grab">Каждый месяц разыгрываем <span className="inline-block">10 000</span> рублей для наших клиентов</p>
                                <label>
                                    <input type="text" className="email max-w-[225px] max-md:max-w-none w-full rounded-[30px] py-[9px] px-[25px] placeholder:text-blind-gray text-current focus:placeholder:text-current" placeholder="Введите e-mail"/>
                                </label>
                            </div>
                            <img className="hover:scale-95 hover:cursor-grab" src={emailImage} alt="Market Background Image"/>
                        </div>
                    </div>
                    <div className="item py-[35px] px-10 bg-pink w-full rounded-2xl max-md:p-[15px]">
                        <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-10">
                            <div>
                                <h3 className="title text-[18px] font-bold">Заходите к нам</h3>
                                <p className="subtitle leading-[1.41] my-[25px] max-w-[141px] max-md:max-w-none hover:scale-105 hover:cursor-grab">Более 300 магазинов
                                    по всей России</p>
                                <button className="border-2 rounded-[30px] py-[9px] px-[29px] hover:bg-pink-hover">Карта магазинов</button>
                            </div>
                            <img className="hover:scale-95 hover:cursor-grab" src={deliveryImage} alt="Market Background Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Market;