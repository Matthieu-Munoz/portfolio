// Dependencies
import { useDispatch } from 'react-redux';
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import * as Scroll from 'react-scroll';
// Local | React-Redux
import { toggleSection } from '@/actions/app';
// styles
import "./socials.scss"

function Socials() {
    const dispatch = useDispatch();
    const scroller = Scroll.scroller;
    const handleClickContact = (evt) => {
        evt.preventDefault();
        dispatch(toggleSection('contact', true));
        scroller.scrollTo('contact', {
            duration: 500,
            smooth: true,
            ignoreCancelEvents: true,
        })
    }
    return (
        <div className="socials">
            <a href="/" className="socials__link" title="lien vers la section contact" onClick={handleClickContact} aria-label="Contact" data-cooltipz-dir="bottom">
                <AiFillMail className="socials__link--icon" />
            </a>
            <a href="https://github.com/Matthieu-Munoz" title="lien vers mon Github" target="blank" className="socials__link" aria-label="Github" data-cooltipz-dir="bottom">
                <AiFillGithub className="socials__link--icon" />
            </a>
            <a href="https://www.linkedin.com/in/matthieu-munoz-798b33184/" title="lien vers mon Linkedin" target="blank" className="socials__link" aria-label="Linkedin" data-cooltipz-dir="bottom">
                <AiFillLinkedin className="socials__link--icon" />
            </a>
            <span className="socials__dash" />
        </div>
    );
}

export default Socials;
