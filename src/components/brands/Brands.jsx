import React from 'react';
import brandsImage from "../../../public/assets/brands/brands-img-1.png";
import BrandsItemRow from "./BrandsItemRow.jsx";

const Brands = () => {
    return (
        <section className="pt-[100px] pb-[80px]">
            <div className="container">
                <div className="items bg-white rounded-2xl">
                    <BrandsItemRow/>
                    <BrandsItemRow/>
                    <BrandsItemRow/>
                </div>
            </div>
        </section>
    );
};

export default Brands;