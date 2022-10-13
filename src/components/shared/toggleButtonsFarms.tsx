import React, { useEffect, useRef } from "react";

export function FarmLiveToggleButton() {
    const focusRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (focusRef) {
            focusRef.current?.focus()
        }
    }, [])



  return (
    <div className="farms_live_btn_container bg-lightInput rounded-default border-1 border-solid border-lightInputSecondaryfarms_live_ box-border w-max flex">
      <input type="button" value="Live" ref={focusRef} className="farms_live_btn_interval__container" />
      <input type="button" value="Finished" className="farms_live_btn_interval__container ml-1 " />
    </div>
  );
}
