// Dependencies
// Local | React-Redux
import Image from "next/image";
import { SectionTitle } from "../SectionTitle";
// Styles

export function HomeIntro({ data }) {
  /**
   * calculate the age from the birthdate "mm/dd/yyyy"
   * @param {string} birthDate
   * @returns number corresponding to the age
   */
  function calculateAge(birthDate) {
    // Transform the inputed birthdate
    birthDate = new Date(birthDate);
    // Getting current date
    const currentDay = new Date();
    // First calculation of age based on years
    let age = currentDay.getFullYear() - birthDate.getFullYear();
    // Adjustment if the birthdate isn't passed yet including days and months
    if (currentDay.getMonth() < birthDate.getMonth() || (currentDay.getMonth() === birthDate.getMonth() && currentDay.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <div className="home">
      <div className="home__intro">
        <SectionTitle className="home__intro__title" title="Portfolio" type="h1" />
        <div className="home__intro__text">
          <p className="home__intro__text__para">{data.text[0]}</p>
          <p className="home__intro__text__para">{data.text[1]}</p>
          <p className="home__intro__text__para">{data.text[2]}</p>
          <p className="home__intro__text__para">
            <span className="home__intro__text__para--icon" />
            {data.text[3]}
          </p>
        </div>
      </div>
      <div className="home__profil">
        <div className="home__profil__card" id="home__profil__card">
          <div className="home__profil__card__me">
            <div className="home__profil__card__me__container">
              <div className="home__profil__card__me__container__inner">
                {/* <img
                  className="home__profil__card__me__container__inner--circle"
                  src={`https://res.cloudinary.com/matthieu-munoz/image/upload/c_scale,h_380,w_380/PP-bg_uhlhea.webp`}
                  alt={`background for profil`}
                /> */}
                <Image
                  className="home__profil__card__me__container__inner--circle"
                  alt={`Green circle use as background for profil picture`}
                  src={`/static/images/PP-bg.png`}
                  width={380}
                  height={380}
                />
                <Image
                  className="home__profil__card__me__container__inner--img"
                  alt={`Portrait of Matthieu Munoz`}
                  src={`/static/images/matthieu-nobg.png`}
                  width={380}
                  height={380}
                />
              </div>
            </div>
            <div className="home__profil__card__me__divider" />
            <div className="home__profil__card__me__name">Matthieu</div>
            <div className="home__profil__card__me__title">
              {calculateAge("05/14/1997")}
              {data.profil.info}
            </div>
            <div className="home__profil__card__me__title">contact@matthieu-munoz.fr</div>
          </div>
        </div>
      </div>
    </div>
  );
}
