// Dependencies
import DOMPurify from "dompurify";
import PropTypes from 'prop-types';
// Local | React-Redux
// Styles
import "./card.scss"

function Card({
    title,
    url,
    img_mobil,
    img_deskot,
    desc,
    cardStyle,
}) {
    return (
        <div className={`card card__${cardStyle}`}>
            <div className="card__imgs">
                <img src={img_mobil} alt={`mobile vue of project ${title}`} />
                <img src={img_deskot} alt={`desktop vue of project ${title}`} />
            </div>
            <a href={url} target="blank" className="card__link">{title}</a>
            <div className="card__sep" />
            <div className="card__desc" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(desc) }} />
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    img_mobil: PropTypes.string,
    img_deskot: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    cardStyle: PropTypes.string.isRequired,
};

export default Card;
