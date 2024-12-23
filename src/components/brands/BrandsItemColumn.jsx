import React from 'react';
import brandsImage from "../../../public/assets/brands/brands-img-1.png";

const BrandsItemColumn = ({id}) => {

    return (
        <div className={id < 2 ? "item-column max-[480px]:border-1" : "item-column"}>
            <img src={brandsImage} alt="Brands Image List" className="item-img"/>
        </div>
    );
};

export default BrandsItemColumn;