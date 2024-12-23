import React from 'react';
import youtubeIcon from "../../../public/assets/youtube.svg";

const FooterMiddleIcon = ({src}) => {
    return (
        <a className="flex items-center justify-center size-[45px] border-2 border-pink rounded-full"
           href="#">
            <img src={src} alt="Footer Icons Contacts Us" className="icon"/>
        </a>
    );
};

export default FooterMiddleIcon;