import React from 'react';

const ArmChairInfo = () => {
    return (
        <section className="armchair-info h-[604px] max-[480px]:h-[460px]">
            <div className="container flex items-center h-full text-white">
                <div>
                    <h2 className="text-[48px] max-[480px]:text-[35px] font-bold hover:scale-105 hover:cursor-pointer inline-block">Супер кресло</h2> <br/>
                    <p className="my-[50px] leading-[1.5] max-w-[308px] hover:scale-105 hover:cursor-pointer inline-block max-[480px]:my-[20px]">
                        Текст акции всегда отражает суть, а не просто болтовню, поэтому внимательнее
                    </p>
                    <button className="tracking-wider rounded-[40px] border-2 max-w-[170px] w-full py-[13px] hover:bg-pink-hover">Подробнее</button>
                </div>
            </div>
        </section>
    );
};

export default ArmChairInfo;