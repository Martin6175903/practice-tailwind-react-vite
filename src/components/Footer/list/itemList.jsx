import React from 'react';

const ItemList = ({title}) => {
    return (
        <li>
            <a className="text-[12px] leading-[2.33] text-dark-gray hover:text-pink hover:scale-125" href="#">
                {title}
            </a>
        </li>
    );
};

export default ItemList;