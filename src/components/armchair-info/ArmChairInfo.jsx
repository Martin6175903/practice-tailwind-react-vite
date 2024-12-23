import React from 'react';

const ArmChairInfo = () => {
    return (
        <section className="armchair-info h-[604px]">
            <div className="container flex items-center h-full text-white">
                <div>
                    <h2 className="text-[48px] font-bold">Супер кресло</h2>
                    <p className="py-[50px] leading-[1.5] max-w-[308px]">Текст акции всегда отражает суть, а не просто
                        болтовню, поэтому внимательнее</p>
                    <button className="tracking-wider rounded-[40px] border-2 max-w-[170px] w-full py-[13px]">Подробнее</button>
                </div>
            </div>
        </section>
    );
};

export default ArmChairInfo;