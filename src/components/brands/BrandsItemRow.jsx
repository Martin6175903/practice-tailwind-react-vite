import React from 'react';
import BrandsItemColumn from "./BrandsItemColumn.jsx";

const BrandsItemRow = () => {

    return (
        <div className="item-row grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-[480px]:grid-cols-1">
            <BrandsItemColumn id={0}/>
            <BrandsItemColumn id={1}/>
            <BrandsItemColumn id={2}/>
            <BrandsItemColumn id={3}/>
        </div>
    );
};

export default BrandsItemRow;