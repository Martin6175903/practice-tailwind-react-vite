import React from 'react';
import HeaderTop from "./HeaderTop.jsx";
import HeaderMiddle from "./HeaderMiddle.jsx";
import HeaderBottom from "./HeaderBottom/HeaderBottom.jsx";

const Header = () => {
    return (
        <header className="">
            <HeaderTop/>
            <HeaderMiddle/>
            <HeaderBottom/>
        </header>
    );
};

export default Header;