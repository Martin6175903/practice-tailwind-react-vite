import React from 'react';
import youtubeIcon from "../../assets/youtube.svg";
import vkIcon from "../../assets/vk-icon.svg";
import facebookIcon from "../../assets/facebook-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";


const FooterMiddle = () => {
    return (
        <div className="bg-white">
            <div className="container py-[38px]">
                <div className="contacts grid grid-cols-3 justify-between items-center">
                    <div className="icons flex gap-[20px]">
                        <a className="flex items-center justify-center size-[45px] border-2 border-pink rounded-full"
                           href="#">
                            <img src={youtubeIcon} alt="Footer Icons Contacts Us" className="icon"/>
                        </a>
                        <a className="flex items-center justify-center size-[45px] border-2 border-pink rounded-full" href="#">
                            <img src={vkIcon} alt="Footer Icons Contacts Us" className="icon"/>
                        </a>
                        <a className="flex items-center justify-center size-[45px] border-2 border-pink rounded-full" href="#">
                            <img src={facebookIcon} alt="Footer Icons Contacts Us" className="icon"/>
                        </a>
                        <a className="flex items-center justify-center size-[45px] border-2 border-pink rounded-full" href="#">
                            <img src={instagramIcon} alt="Footer Icons Contacts Us" className="icon"/>
                        </a>
                    </div>
                    <address>
                        <a className="not-italic" href="https://yandex.by/maps/2/saint-petersburg/house/nevskiy_prospekt_140/Z0kYdQFpSUQFQFtjfXVzeHRmZw==/?indoorLevel=1&ll=30.369012%2C59.929854&z=17.14">
                            198555, Невский пр. 140, офис 140
                        </a>
                    </address>
                    <div className="flex items-center justify-end gap-10">
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