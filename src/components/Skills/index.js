// Dependencies
// Local | React-Redux
// Styles
import SectionTitle from "../SectionTitle";
import "./skills.scss";

function Skills({ data }) {
  return (
    <div className="skills">
      <SectionTitle title="Compétences" />
      <div className="skills__cards">
        {data.map((item) => {
          return (
            <div
              className={`skills__cards__card skills__cards__card--${item.class}`}
              key={item.class}
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="skills__cards__card--ctn">
                <div
                  className="skills__cards__card__logo"
                  data-skills={item.class}
                />
                <h3 className="skills__cards__card__title">{item.name}</h3>
                <div
                  className={`skills__cards__card__list ${
                    item.class === "tech" && "skills__cards__card__list--large"
                  }`}
                >
                  {item.skill.map((skill) => {
                    return (
                      <div
                        className="skills__cards__card__list__item"
                        aria-label={skill.tip}
                        data-cooltipz-dir="top"
                        key={skill.name}
                      >
                        <img
                          src={skill.src}
                          alt={`${skill.name} icon`}
                          className="skills__cards__card__list__item__icon"
                        />
                        {skill.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
