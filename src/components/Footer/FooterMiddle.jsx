import React from 'react';
import youtubeIcon from "../../../public/assets/youtube.svg";
import vkIcon from "../../../public/assets/vk-icon.svg";
import facebookIcon from "../../../public/assets/facebook-icon.svg";
import instagramIcon from "../../../public/assets/instagram-icon.svg";
import FooterMiddleIcon from "./FooterMiddleIcon.jsx";


const FooterMiddle = () => {
    return (
        <div className="bg-white">
            <div className="container py-[38px]">
                <div className="contacts flex justify-between items-center max-md:flex-wrap max-md:gap-7 max-md:justify-center">
                    <div className="icons flex gap-[20px]">
                        <FooterMiddleIcon src={youtubeIcon}/>
                        <FooterMiddleIcon src={vkIcon}/>
                        <FooterMiddleIcon src={facebookIcon}/>
                        <FooterMiddleIcon src={instagramIcon}/>
                    </div>
                    <address className="max-md:order-3">
                        <a className="not-italic" href="https://yandex.by/maps/2/saint-petersburg/house/nevskiy_prospekt_140/Z0kYdQFpSUQFQFtjfXVzeHRmZw==/?indoorLevel=1&ll=30.369012%2C59.929854&z=17.14">
                            198555, Невский пр. 140, офис 140
                        </a>
                    </address>
                    <div className="flex items-center justify-end gap-10 max-[900px]:flex-col max-[900px]:gap-3 max-md:flex-row max-md:order-2 max-[480px]:flex-col">
                        <a className="text-[16px]" href="tel:88121234567">8 (812) 123-45-67</a>
                        <button className="px-[26px] py-[13px] rounded-[40px] border-2 border-pink">Обратный звонок
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterMiddle;