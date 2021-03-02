import "./style.scss";
import PropTypes from "prop-types";

const Button = ({ children, disabled, type }: any) => {
  return (
    <button className="adex-button" disabled={disabled} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
};

Button.defaultProps = {
  disabled: false,
  type: "button",
};

export default Button;
