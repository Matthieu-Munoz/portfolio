// Dependencies
import PropTypes from "prop-types";
// Local | React-Redux
// Styles
import "./sectionTitle.scss";

function SectionTitle({ title, type }) {
  return (
    <>
      {type === "h1" && <h1 className="section_title">{title}</h1>}
      {type === "h2" && <h2 className="section_title">{title}</h2>}
    </>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};
SectionTitle.defaultProps = {
  type: "h2",
};

export default SectionTitle;
