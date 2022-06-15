import { useSelector } from "react-redux";
import classNames from "classnames";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import TextareaAutosize from "react-autosize-textarea/lib";
// styles
import "./field.scss";

function Field({ label, name, type, onChange, value, tip }) {
  const error = useSelector((state) => state.contact[`${name}Error`]);
  const cssClass = classNames("input-container", { "input-error": error });

  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  return (
    <>
      {type === "textarea" ? (
        <div className={cssClass}>
          <TextareaAutosize
            className="input-container__textarea"
            name={name}
            id={name}
            required
            style={{ maxHeight: 100, resize: "none" }}
            value={value}
            onChange={handleChange}
          />
          <label htmlFor={name}>{label}</label>
          <AiOutlineExclamationCircle
            className="error__icon"
            aria-label={tip}
            data-cooltipz-dir="top"
          />
          <div className="bar" />
        </div>
      ) : (
        <div className={cssClass}>
          <input
            value={value}
            onChange={handleChange}
            type={type}
            id={name}
            required
          />
          <label htmlFor={name}>{label}</label>
          <div
            className="error__icon"
            aria-label={tip}
            data-cooltipz-dir="left"
          >
            <AiOutlineExclamationCircle className="error__icon" />
          </div>
          <div className="bar" />
        </div>
      )}
    </>
  );
}

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  tip: PropTypes.string,
};

Field.defaultProps = {
  type: "text",
  tip: "",
};

export default Field;
