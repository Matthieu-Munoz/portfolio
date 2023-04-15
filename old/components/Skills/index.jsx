// Dependencies
// Local | React-Redux
import Image from "next/image";
import { SectionTitle } from "../SectionTitle";
// Styles

export function Skills({ data }) {

  return (
    <div className="skills">
      <SectionTitle title={data.title} />
      <div className="skills__cards">
        {data.skillList.map((item) => {
          return (
            <div className={`skills__cards__card skills__cards__card--${item.class}`} key={item.class}>
              <div className="skills__cards__card--ctn">
                <div className="skills__cards__card__logo" data-skills={item.class} />
                <h3 className="skills__cards__card__title">{item.name}</h3>
                <div className={`skills__cards__card__list ${item.class === "tech" && "skills__cards__card__list--large"}`}>
                  {item.skill.map((skill) => {
                    return (
                      <div className="skills__cards__card__list__item" aria-label={skill.tip} data-cooltipz-dir="top" key={skill.name}>
                        <Image
                          className="skills__cards__card__list__item__icon"
                          alt={`${skill.name} icon`}
                          src={skill.src}
                          width={80}
                          height={80}
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
