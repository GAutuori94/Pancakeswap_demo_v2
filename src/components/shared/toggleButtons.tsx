import React, { useEffect, useRef } from "react";

export function GraphIntervalsToggleButton() {
    const focusRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (focusRef) {
            focusRef.current?.focus()
        }
    })



  return (
    <div className="btn_container bg-[#EFF4F5] rounded-default border-1 border-solid border-[#E9EAEB] box-border w-max flex">
      <input type="button" value="24H" ref={focusRef} className="btn_interval__container" />
      <input type="button" value="1W" className="btn_interval__container ml-1 " />
      <input type="button" value="1M" className="btn_interval__container ml-1 " />
      <input type="button" value="1Y" className="btn_interval__container ml-1 " />
    </div>
  );
}
