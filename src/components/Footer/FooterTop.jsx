import React from 'react';
import ItemList from "./list/itemList.jsx";
import List from "./list/List.jsx";

const FooterTop = () => {
    return (
        <section className="py-[60px] border-b-[1px] border-gray bg-white">
            <div className="container">
                <div className="items flex justify-around gap-[30px] flex-wrap">
                    <List/>
                    <List/>
                    <List/>
                    <List/>
                </div>
            </div>
        </section>
    );
};

export default FooterTop;