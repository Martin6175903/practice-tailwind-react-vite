import React from 'react';
import armchairImage from "../../../public/assets/special-offers/armchair.png";
import SpecialOffersItem from "./SpecialOffersItem.jsx";

const SpecialOffers = () => {
    return (
        <section className="special-offers pt-[80px] pb-[100px]">
            <div className="container">
                <h4 className="pb-[38px] title">Специальные предложения</h4>
                <div className="flex gap-[30px] max-lg:flex-wrap max-lg:justify-center">
                    <SpecialOffersItem/>
                    <SpecialOffersItem/>
                    <SpecialOffersItem/>
                    <SpecialOffersItem/>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;