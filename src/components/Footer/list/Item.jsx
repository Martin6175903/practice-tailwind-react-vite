import React from 'react';
import ItemList from "./itemList.jsx";

const Item = () => {
    return (
        <div className="item">
            <h4 className="font-bold leading-[1.41] text-[16px] pb-[30px] border-b-[1px] border-gray">
                Популярные <br/> категории
            </h4>
            <ul className="flex flex-col pt-[25px] gap-[10px]">
                <ItemList title="Насадки"/>
                <ItemList title="Инструменты"/>
                <ItemList title="Гель-лаки"/>
                <ItemList title="Дизайн"/>
                <ItemList title="Наращивание"/>
                <ItemList title="Оборудование"/>
            </ul>
        </div>
    );
};

export default Item;