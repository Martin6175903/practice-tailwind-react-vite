import React from 'react';
import emailImage from "../../assets/market/mail.svg";
import deliveryImage from "../../assets/market/delivery.svg";

const Market = () => {
    return (
        <section className="text-white">
            <div className="container">
                <div className="items flex justify-center gap-[30px]">
                    <div className="item py-[35px] px-10 bg-pink w-full">
                        <div className="flex justify-between items-center">
                            <div className="">
                                <h3 className="title text-[18px] font-bold">Получайте бонусы и подарки</h3>
                                <p className="subtitle leading-[1.41] my-[25px] max-w-[231px]">Каждый месяц разыгрываем <span className="inline-block">10 000</span> рублей для наших клиентов</p>
                                <label>
                                    <input type="text" className="email max-w-[225px] w-full rounded-[30px] py-[9px] px-[25px] placeholder:text-blind-gray" placeholder="Введите e-mail"/>
                                </label>
                            </div>
                            <img src={emailImage} alt="Market Background Image"/>
                        </div>
                    </div>
                    <div className="item py-[35px] px-10 bg-pink w-full">
                        <div className="flex justify-between items-center">
                            <div className="">
                                <h3 className="title text-[18px] font-bold">Заходите к нам</h3>
                                <p className="subtitle leading-[1.41] my-[25px] max-w-[141px]">Более 300 магазинов
                                    по всей России</p>
                                <button className="border-2 rounded-[30px] py-[9px] px-[29px]">Карта магазинов</button>
                            </div>
                            <img src={deliveryImage} alt="Market Background Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Market;