export const SwitchToggleMobile = ({ position, name }) => {
  return (
    <div className={`switch-toggle switch-toggle_mobile ${position}`}>
      <label
        className='switch-toggle__label hover-link'
        htmlFor='checkbox-mobile'
      >
        <input
          className='switch-toggle__input'
          type='checkbox'
          id='checkbox-mobile'
        />
        <span className='switch-toggle__slider'></span>
      </label>
      <p className='switch-toggle__name'>{name}</p>
    </div>
  );
};
