// Dependencies
// Local | React-Redux
import SectionTitle from '../SectionTitle';
import matthieuPP from '@/assets/images/matthieu-nobg.png';
import matthieuBG from '@/assets/images/PP-bg.png';
// Styles
import './home.scss';
function Home() {
    return (
        <div className="home">
            <div className="home__intro">
                <SectionTitle className="home__intro__title" title="Bienvenue" />
                <div className="home__intro__text">
                    <p className="home__intro__text__para">Après plus de quatre ans passés dans un atelier de métallerie ferronnerie d'art comme technicien d'étude, j'ai commencé une reconversion professionnelle vers le développement web.</p>
                    <p className="home__intro__text__para">J'ai découvert ce milieu par des projets personnels qui ont fortement attisé ma curiosité, mais surtout mon envie de faire partie de ce monde.</p>
                    <p className="home__intro__text__para">J'ai donc suivi une formation chez O'Clock, avec un socle PHP et une spécialisation en ReactJS, j'ai appris les ficelles du métier, mais j'ai aussi pris conscience de mes préférences.</p>
                    <p className="home__intro__text__para"><span className="home__intro__text__para--icon" />Aujourd'hui, je me spécialise donc en développement front-end en gardant des compétences full-stack.</p>
                </div>
            </div>
            <div className="home__profil">
                <div className="home__profil__card" id="home__profil__card">
                    <div className="home__profil__card__me">
                        <div className="home__profil__card__me__container">
                            <div className="home__profil__card__me__container__inner">
                                <img className="home__profil__card__me__container__inner--circle" alt="profil background" src={matthieuBG} />
                                <img className="home__profil__card__me__container__inner--img" alt="profil" src={matthieuPP} />
                            </div>
                        </div>
                        <div className="home__profil__card__me__divider" />
                        <div className="home__profil__card__me__name">Matthieu</div>
                        <div className="home__profil__card__me__title">24 ans, Front-End</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
