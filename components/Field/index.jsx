import classNames from "classnames";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { PropTypes } from "prop-types";
import TextareaAutosize from "react-autosize-textarea/lib";
// styles

export function Field({ label, name, type, onChange, tip, rhfregister, rhferror }) {
  const cssClass = classNames("input-container", { "input-error": rhferror[name] });

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
            required
            style={{ maxHeight: 100, resize: "none" }}
            {...rhfregister(name, { required: true })}
            id={name}
            error={rhferror[name]}
          />
          <label htmlFor={name}>{label}</label>
          <AiOutlineExclamationCircle className="error__icon" aria-label={tip} data-cooltipz-dir="top" />
          <div className="bar" />
        </div>
      ) : (
        <div className={cssClass}>
          <input type={type} {...rhfregister(name, { required: true })} id={name} error={rhferror[name]} />
          <label htmlFor={name}>{label}</label>
          <div className="error__icon" aria-label={tip} data-cooltipz-dir="left">
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
  tip: PropTypes.string,
};

Field.defaultProps = {
  type: "text",
  tip: "",
};
