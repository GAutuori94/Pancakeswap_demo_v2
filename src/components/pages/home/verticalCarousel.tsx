import React from "react";

export function VerticalCarousel() {


    return <>
        <div className="vertical_carousel w-50 ml-10">
            <div className="carousel_container__vertical_carousel mt-[24px]">
                <div className="top__carousel_container__vertical_carousel mb-[24px] flex items-center">
                    <h2 className="text-lightText font-['Kanit'] leading-lineHeightPar font-fontSizeParagraph font-fontHeavyWeight flex gap-0.5">Top
                        <span className="text-lightSecondary">Farms</span>
                    </h2>
                    <button>
                    <svg viewBox="0 0 24 25" height="24px" width="24px" color="textSubtle" xmlns="http://www.w3.org/2000/svg" className="invert_button fill-lightTextSubtle"><path d="M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"/></svg>
                    </button>
                </div>
                <div className="bottom__carousel_container__vertical_carousel">
                        <div className="gridView__bottom__carousel_container grid grid-cols-5">
                            <div className="column__gridView">
                                <div className="data__column__gridView">
                                    <div className="market__data__column">BUSD-ETH</div>
                                    <div className="market__data__column">12873.56%</div>
                                    <div className="market__data__column">APR</div>
                                </div>
                            </div>
                            <div className="column__gridView">
                                <div className="data__column__gridView">
                                    <div className="market__data__column">BUSD-ETH</div>
                                    <div className="market__data__column">12873.56%</div>
                                    <div className="market__data__column">APR</div>
                                </div>
                            </div>
                            <div className="column__gridView">
                                <div className="data__column__gridView">
                                    <div className="market__data__column">BUSD-ETH</div>
                                    <div className="market__data__column">12873.56%</div>
                                    <div className="market__data__column">APR</div>
                                </div>
                            </div>
                            <div className="column__gridView">
                                <div className="data__column__gridView">
                                    <div className="market__data__column">BUSD-ETH</div>
                                    <div className="market__data__column">12873.56%</div>
                                    <div className="market__data__column">APR</div>
                                </div>
                            </div>
                            <div className="column__gridView">
                                <div className="data__column__gridView">
                                    <div className="market__data__column">BUSD-ETH</div>
                                    <div className="market__data__column">12873.56%</div>
                                    <div className="market__data__column">APR</div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </>
}
