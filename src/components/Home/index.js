// Dependencies
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
// Local | React-Redux
import SectionTitle from "../SectionTitle";
// Styles
import "./home.scss";

function Home({ data }) {
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
    if (
      currentDay.getMonth() < birthDate.getMonth() ||
      (currentDay.getMonth() === birthDate.getMonth() &&
        currentDay.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  const cld = new Cloudinary({
    cloud: {
      cloudName: "matthieu-munoz",
    },
  });

  const backgroundImg = cld.image("PP-bg_uhlhea.webp");
  const profileImg = cld.image("matthieu-nobg_ly8aoi.webp");
  backgroundImg.resize(fill(380, 380)).format("webp").quality(100);
  profileImg.resize(fill(415, 415)).format("webp").quality(100);

  return (
    <div className="home">
      <div className="home__intro">
        <SectionTitle
          className="home__intro__title"
          title="Portfolio"
          type="h1"
        />
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
                <AdvancedImage
                  className="home__profil__card__me__container__inner--circle"
                  loading="lazy"
                  alt={`background for profil picture`}
                  cldImg={backgroundImg}
                />
                <AdvancedImage
                  className="home__profil__card__me__container__inner--img"
                  loading="lazy"
                  alt={`profil picture`}
                  cldImg={profileImg}
                />
              </div>
            </div>
            <div className="home__profil__card__me__divider" />
            <div className="home__profil__card__me__name">Matthieu</div>
            <div className="home__profil__card__me__title">
              {calculateAge("05/14/1997")}
              {data.profil.info}
            </div>
            <div className="home__profil__card__me__title">
              contact@matthieu-munoz.fr
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
