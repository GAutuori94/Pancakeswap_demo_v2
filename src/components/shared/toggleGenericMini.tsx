import React from 'react';

export function ToggleGenericMini() {
  return (
    <>
      <label className='mini_toggle_sub_graph'>
        <input type='checkbox' className='mini_input_sub_graph' />
        <span className='mini_slider_sub_graph dark:before:bg-darkBackgroundAlt dark:bg-darkBackgroundDisabled h-[20px] '></span>
      </label>
    </>
  );
}
