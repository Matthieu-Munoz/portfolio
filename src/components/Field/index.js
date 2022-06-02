import PropTypes from 'prop-types';
import TextareaAutosize from 'react-autosize-textarea/lib';
// styles
import './field.scss';

function Field({
    label,
    name,
    type,
    onChange,
    value,
}) {
    const handleChange = (evt) => {
        onChange(evt.target.value, name);
    };
    return (
        <>{(type === "textarea") ? (
            <div className="input-container">
                <TextareaAutosize
                    className="input-container__textarea"
                    name={name}
                    id={name}
                    required
                    style={{ maxHeight: 100, resize: 'none' }}
                    value={value}
                    onChange={handleChange}
                />
                <label htmlFor={name}>{label}</label>
                <div className="bar" />
            </div>
        ) :
            <div className="input-container">
                <input
                    value={value}
                    onChange={handleChange}
                    type={type}
                    id={name}
                    required
                />
                <label htmlFor={name}>{label}</label>
                <div className="bar" />
            </div>
        }</>
    );
}

Field.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

Field.defaultProps = {
    type: 'text',
};

export default Field;
