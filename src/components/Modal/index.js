// Dependencies
import { useSelector, useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
// Local | React-Redux
import { toggleModal } from "@/actions/app";
import ProjectInfo from "./ProjectInfo";
// Styles
import "./modal.scss";

function Modal() {
  const dispatch = useDispatch();
  const { modalOpened, modalComponent } = useSelector((state) => state.app);
  const handleModalKeyDown = (evt) => {
    if (evt.key === "Escape") {
      handleModalToggle();
    }
  };
  const handleModalToggle = () => {
    dispatch(toggleModal(""));
  };

  return (
    <>
      {modalOpened && (
        <>
          <div className="modal" tabIndex="0" onKeyDown={handleModalKeyDown}>
            <IoClose className="modal__close" onClick={handleModalToggle} />
            {modalComponent === "projectinfo" && <ProjectInfo />}
          </div>
          <div id="modal_background" onClick={handleModalToggle} />
        </>
      )}
    </>
  );
}

export default Modal;
