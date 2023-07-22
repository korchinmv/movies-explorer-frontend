export const SwitchToggle = ({ position, name, handleCheckbox, checkbox }) => {
  return (
    <div className={`${position} switch-toggle`}>
      <label className="switch-toggle__label hover-link" htmlFor="checkbox">
        <input
          className="switch-toggle__input"
          type="checkbox"
          id="checkbox"
          onChange={handleCheckbox}
          checked={checkbox}
        />
        <span className="switch-toggle__slider"></span>
      </label>
      <p className="switch-toggle__name">{name}</p>
    </div>
  );
};
