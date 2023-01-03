// Dependencies
import { IoClose } from "react-icons/io5";
// Local | React-Redux
import { ProjectInfo } from "./ProjectInfo";
import { useAppContext } from "../../context/state";
// Styles

export function Modal() {
  const { app } = useAppContext();
  const handleModalKeyDown = (evt) => {
    if (evt.key === "Escape") {
      handleModalToggle();
    }
  };
  const handleModalToggle = () => {
    app.toggleModal("");
  };


  return (
    <>
      {app.modalOpened && (
        <>
          <div className="modal" tabIndex="0" onKeyDown={handleModalKeyDown}>
            <IoClose className="modal__close" onClick={handleModalToggle} />
            {app.modalComponent === "projectinfo" && <ProjectInfo />}
          </div>
          <div id="modal_background" onClick={handleModalToggle} />
        </>
      )}
    </>
  );
}
