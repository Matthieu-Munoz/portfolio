// Dependencies
import { useSelector, useDispatch } from "react-redux";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
// Local | React-Redux
// Styles
import Card from "./Card";
import "./projects.scss";
import SectionTitle from "../SectionTitle";
import { toggleProjectsIndex } from "@/actions/projects";

function Projects({ data }) {
  const dispatch = useDispatch();
  const { index } = useSelector((state) => state.projects);

  const slideLeft = () => {
    if (index - 1 >= 0) {
      dispatch(toggleProjectsIndex(index - 1));
    } else {
      dispatch(toggleProjectsIndex(data.list.length - 1));
    }
  };

  const slideRight = () => {
    if (index + 1 <= data.list.length - 1) {
      dispatch(toggleProjectsIndex(index + 1));
    } else {
      dispatch(toggleProjectsIndex(0));
    }
  };

  const handlePointerEvent = (e) => {
    let isTouchEvent = e.type === "touchstart" ? true : false;
    /* this is our card we will move */
    let card = e.target;
    /* to keep track of the value to offset the card left */
    let offset = 0;
    /* keeps the initial mouse click x value */
    let initialX = isTouchEvent ? e.touches[0].clientX : e.clientX;
    /* set the documents onmousemove event to use this function*/
    document.onmousemove = onPointerMove;
    /* sets the documents onmouseup event to use this function */
    document.onmouseup = onPointerEnd;
    document.ontouchmove = onPointerMove;
    document.ontouchend = onPointerEnd;
    /* when the mouse moves we handle the event here */
    function onPointerMove(e) {
      /* set offset to the current position of the cursor,
            minus the initial starting position  */
      offset = (isTouchEvent ? e.touches[0].clientX : e.clientX) - initialX;
      /* set the left style property of the card to the offset 
            value */
      card.style.left = offset + "px";

      if (offset <= -100) {
        slideRight();
        /* if we're at the last card, snap back to center */
        if (index === data.list.length - 1) {
          card.style.left = 0;
        } else {
          /* hide the shift back to center 
                  until after the transition */
          setTimeout(() => {
            card.style.left = 0;
          }, 1000);
        }
        return;
      }
      if (offset >= 100) {
        slideLeft();
        /* if we're at the first card, snap back to center */
        if (index === 0) {
          card.style.left = 0;
        } else {
          /* hide the shift back to center 
                  until after the transition */
          setTimeout(() => {
            card.style.left = 0;
          }, 1000);
        }
        return;
      }
    }

    function onPointerEnd(e) {
      /* remove functions from event listeners
            (stop tracking mouse movements) */
      if (offset < 0 && offset > -100) {
        card.style.left = 0;
      }
      if (offset > 0 && offset < 100) {
        card.style.left = 0;
      }
      document.onmousemove = null;
      document.onmouseup = null;
      document.ontouchmove = null;
      document.ontouchend = null;
    }
  };

  return (
    <div className="projects">
      <SectionTitle title="Projets" />
      <div className="projects__carousel">
        <BsChevronCompactLeft
          className="projects__carousel__chevron projects__carousel__chevron--prev"
          onClick={slideLeft}
        />
        {data.list.map((project, n) => {
          let position = n > index ? "next" : n === index ? "active" : "prev";
          return (
            <Card
              key={n}
              {...project}
              project={project}
              cardStyle={position}
              handlePointerEvent={handlePointerEvent}
              data={data}
            />
          );
        })}
        <BsChevronCompactRight
          className="projects__carousel__chevron projects__carousel__chevron--next"
          onClick={slideRight}
        />
      </div>
    </div>
  );
}

export default Projects;
