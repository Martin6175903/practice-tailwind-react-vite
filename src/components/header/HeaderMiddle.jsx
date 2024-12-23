import React from 'react';
import logo from '../../../public/assets/header/logo.svg';

const HeaderMiddle = () => {
    const focusInput = () => {
        let target = event.target.previousElementSibling;
        target.firstElementChild.style.fill = 'rebeccapurple';
    }
    const blurInput = () => {
        let target = event.target.previousElementSibling;
        target.firstElementChild.style.fill = '#BDBDBD';
    }

    return (
        <div className="border-b-[1px] bg-white border-gray">
            <div className="container header-middle items-center py-5 max-sm:flex max-sm:flex-wrap max-sm:gap-5">
                <a className="flex gap-5 items-center justify-center hover:decoration-0 mr-10" href="#">
                    <img src={logo} alt="Logo SVG"/>
                    <p className="text-4xl font-bold tracking-widest text-pink">BEAUTY</p>
                </a>
                <div className="flex justify-center">
                    <label className="relative">
                        <svg className="absolute left-5 top-[calc(50%-10px)] hover:cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.7122 17.9342L15.1826 13.5834C16.296 12.205 16.9605 10.4766 16.9605 8.60064C16.9605 4.10865 13.1563 0.454468 8.47962 0.454468C3.8042 0.454207 0 4.10839 0 8.60064C0 13.0929 3.8042 16.7473 8.47988 16.7473C10.4968 16.7473 12.3506 16.0666 13.8079 14.9329L18.322 19.2689C18.513 19.4533 18.7653 19.5457 19.0166 19.5457C19.2689 19.5457 19.5202 19.4533 19.7122 19.2689C20.096 18.8997 20.096 18.3032 19.7122 17.9342ZM1.96629 8.60064C1.96629 5.1505 4.88859 2.34405 8.47988 2.34405C12.0722 2.34405 14.9945 5.1505 14.9945 8.60064C14.9945 12.0508 12.0722 14.8591 8.47988 14.8591C4.88859 14.8591 1.96629 12.0505 1.96629 8.60064Z" fill="#BDBDBD"/>
                        </svg>
                        <input className="w-[250px] bg-gray h-10 rounded-[40px] pl-12 pr-4" onFocus={focusInput} onBlur={blurInput} type="search"/>
                    </label>
                </div>
                <div className="flex items-center justify-end gap-10 max-lg:justify-center max-[480px]:flex-col max-[480px]:gap-5">
                    <a className="text-[16px]" href="tel:88121234567">8 (812) 123-45-67</a>
                    <button className="px-[26px] py-[13px] rounded-[40px] border-2 border-pink">Обратный звонок</button>
                </div>
            </div>
        </div>
    );
};

export default HeaderMiddle;