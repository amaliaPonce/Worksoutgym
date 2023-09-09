const Button = ({ handleClick, children }) => {
  return (
    <button onClick={handleClick} className="buttons">
      {children}
    </button>
  );
};

export default Button;
