import React from 'react';
import ItemList from "./list/itemList.jsx";
import Item from "./list/Item.jsx";

const FooterTop = () => {
    return (
        <section className="py-[60px] border-b-[1px] border-gray bg-white">
            <div className="container">
                <div className="items grid grid-cols-4 gap-[30px]">
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </div>
            </div>
        </section>
    );
};

export default FooterTop;