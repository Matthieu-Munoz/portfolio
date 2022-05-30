// Dependencies
// Local | React-Redux
import SectionTitle from '../SectionTitle';
// Styles
import './home.scss';
function Home() {
    function calculateAge(birthDate) {
        birthDate = new Date(birthDate);
        const otherDate = new Date();

        var years = (otherDate.getFullYear() - birthDate.getFullYear());

        if (otherDate.getMonth() < birthDate.getMonth() || (
            otherDate.getMonth() === birthDate.getMonth() && otherDate.getDate() < birthDate.getDate())) {
            years--;
        }

        return years;
    }
    return (
        <div className="home">
            <div className="home__intro">
                <SectionTitle className="home__intro__title" title="Bienvenue" />
                <div className="home__intro__text">
                    <p className="home__intro__text__para">Après plus de quatre ans passés dans un atelier de métallerie ferronnerie d'art comme technicien d'étude, j'ai commencé une reconversion professionnelle vers le développement web en 2021.</p>
                    <p className="home__intro__text__para">J'ai découvert ce milieu par des projets personnels qui ont fortement attisé ma curiosité, mais surtout mon envie de faire partie de ce monde.</p>
                    <p className="home__intro__text__para">J'ai suivi une formation chez O'Clock jusqu'en mai 2022, avec un socle PHP et une spécialisation en React.js, j'ai appris les ficelles du métier, mais j'ai aussi pris conscience de mes préférences.</p>
                    <p className="home__intro__text__para"><span className="home__intro__text__para--icon" />Aujourd'hui, je me spécialise donc en développement front-end en gardant des compétences full-stack.</p>
                </div>
            </div>
            <div className="home__profil">
                <div className="home__profil__card" id="home__profil__card">
                    <div className="home__profil__card__me">
                        <div className="home__profil__card__me__container">
                            <div className="home__profil__card__me__container__inner">
                                <img className="home__profil__card__me__container__inner--circle" alt="profil background" src="https://res.cloudinary.com/matthieu-munoz/f_auto,c_scale,h_450,w_450,q_80/PP-bg_uhlhea.webp" />
                                <img className="home__profil__card__me__container__inner--img" alt="profil" src="https://res.cloudinary.com/matthieu-munoz/f_auto,c_scale,h_600,w_600,q_100/matthieu-nobg_ly8aoi.webp" />
                            </div>
                        </div>
                        <div className="home__profil__card__me__divider" />
                        <div className="home__profil__card__me__name">Matthieu</div>
                        <div className="home__profil__card__me__title">{calculateAge("05/14/1997")} ans, Développeur web</div>
                        <div className="home__profil__card__me__title">matthieu.munoz.pro@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
