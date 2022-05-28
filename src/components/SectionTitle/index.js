// Dependencies
import PropTypes from 'prop-types';
// Local | React-Redux
// Styles
import './sectionTitle.scss';

function SectionTitle({ title }) {
    return (
        <h2 className="section_title">
            {title}
        </h2>
    );
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
}

export default SectionTitle;
