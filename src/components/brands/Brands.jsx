import React from 'react';
import brandsImage from "../../assets/brands/brands-img-1.png";

const Brands = () => {
    return (
        <section className="pt-[100px] pb-[80px]">
            <div className="container">
                <div className="items bg-white">
                    <div className="item-row grid grid-cols-4 border-b-[1px] border-gray">
                        <div className="item-column border-r-[1px] border-gray"><img src={brandsImage} alt="Brands Image Item" className="item-img"/></div>
                        <div className="item-column border-r-[1px] border-gray"><img src={brandsImage} alt="Brands Image Item" className="item-img"/></div>
                        <div className="item-column border-r-[1px] border-gray"><img src={brandsImage} alt="Brands Image Item" className="item-img"/></div>
                        <div className="item-column"><img src={brandsImage} alt="Brands Image Item" className="item-img"/></div>
                    </div>
                    <div className="item-row grid grid-cols-4 border-b-[1px] border-gray">
                        <div className="item-column border-r-[1px] border-gray"><img src={brandsImage} alt="Brands Image Item" className="item-img"/></div>
                        <div className="item-column border-r-[1px] border-gray"><img src={brandsImage} alt="Brands Image Item" className="item-img"/></div>
                        <div className="item-column border-r-[1px] border-gray"><img src={brandsImage} alt="Brands Image Item" className="item-img"/></div>
                        <div className="item-column"><img src={brandsImage} alt="Brands Image Item" className="item-img"/></div>
                    </div>
                    <div className="item-row grid grid-cols-4">
                        <div className="item-column border-r-[1px] border-gray"><img src={brandsImage} alt="Brands Image Item" className="item-img"/></div>
                        <div className="item-column border-r-[1px] border-gray"><img src={brandsImage} alt="Brands Image Item" className="item-img"/></div>
                        <div className="item-column border-r-[1px] border-gray"><img src={brandsImage} alt="Brands Image Item" className="item-img"/></div>
                        <div className="item-column"><img src={brandsImage} alt="Brands Image Item" className="item-img"/></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;