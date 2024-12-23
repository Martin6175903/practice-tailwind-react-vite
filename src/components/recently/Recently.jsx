import React from 'react';
import armchairRecently from "../../../public/assets/recently/recently-armchair.png";
import RecentlyItem from "./RecentlyItem.jsx";

const Recently = () => {
    return (
        <section className="recently pt-[80px] pb-[100px]">
            <div className="container">
                <h4 className="pb-[38px] title">Вы недавно смотрели</h4>
                <div className="flex gap-[30px] max-lg:flex-wrap max-lg:justify-center">
                    <RecentlyItem/>
                    <RecentlyItem/>
                    <RecentlyItem/>
                    <RecentlyItem/>
                </div>
            </div>
        </section>
    );
};

export default Recently;