// Dependencies
import Slider from "react-slick";
// Local | React-Redux
import SectionTitle from "../SectionTitle";
import Card from "./Card";
// Styles
import "./projects.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects({ data }) {
  const settings = {
    dots: true,
    infinite: true,
    accessibility: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    fade: true,
    cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="projects">
      <SectionTitle title={data.sectionTitle} />
      <div className="projects__carousel" data-aos="fade">
        <Slider {...settings}>
          {data.list.map((project, n) => {
            return <Card key={n} {...project} project={project} data={data} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
