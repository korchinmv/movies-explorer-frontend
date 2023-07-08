export const BurgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`burger ${isOpen && "burger_active"}`}
        type="button"
        aria-label="Открыть главное меню"
      >
        <span className="burger__line"></span>
      </button>
    </>
  );
};
