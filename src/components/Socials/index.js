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
            <a href="/" className="socials__link" onClick={handleClickContact}>
                <AiFillMail className="socials__link--icon" />
            </a>
            <a href="https://github.com/Matthieu-Munoz" target="blank" className="socials__link">
                <AiFillGithub className="socials__link--icon" />
            </a>
            <a href="https://www.linkedin.com/in/matthieu-munoz-798b33184/" target="blank" className="socials__link">
                <AiFillLinkedin className="socials__link--icon" />
            </a>
            <span className="socials__dash" />
        </div>
    );
}

export default Socials;
