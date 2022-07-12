// Dependencies
import { useDispatch } from "react-redux";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillMail,
  AiFillLinkedin,
} from "react-icons/ai";
// Local | React-Redux
import { toggleSection } from "Actions/app";
// styles
import "./socials.scss";

function Socials() {
  const dispatch = useDispatch();
  const handleClickContact = (evt) => {
    evt.preventDefault();
    dispatch(toggleSection("contact", true));
    window.fullpage_api.moveTo("contact");
  };

  return (
    <div className="socials">
      <a
        href="/"
        className="socials__link"
        title="lien vers la section contact"
        onClick={handleClickContact}
        aria-label="Contact"
        data-cooltipz-dir="bottom"
      >
        <AiFillMail className="socials__link--icon" />
      </a>
      <a
        href="https://github.com/Matthieu-Munoz"
        title="lien vers mon Github"
        target="blank"
        className="socials__link"
        aria-label="Github"
        data-cooltipz-dir="bottom"
      >
        <AiFillGithub className="socials__link--icon" />
      </a>
      <a
        href="https://twitter.com/Matthieu_Mnz"
        title="lien vers mon Twitter"
        target="blank"
        className="socials__link"
        aria-label="Twitter"
        data-cooltipz-dir="bottom"
      >
        <AiFillTwitterCircle className="socials__link--icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/matthieu-munoz-798b33184/"
        title="lien vers mon Linkedin"
        target="blank"
        className="socials__link"
        aria-label="Linkedin"
        data-cooltipz-dir="bottom"
      >
        <AiFillLinkedin className="socials__link--icon" />
      </a>
      <span className="socials__dash" />
    </div>
  );
}

export default Socials;
