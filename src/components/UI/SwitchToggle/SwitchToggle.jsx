import React from "react";

export const SwitchToggle = ({ position, name }) => {
  return (
    <div className={`${position} switch-toggle`}>
      <label className='switch-toggle__label hover-link' htmlFor='checkbox'>
        <input className='switch-toggle__input' type='checkbox' id='checkbox' />
        <span className='switch-toggle__slider'></span>
      </label>
      <p className='switch-toggle__name'>{name}</p>
    </div>
  );
};
