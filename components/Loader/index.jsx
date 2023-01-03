import Image from "next/image";
// styles
import loaderSVG from "./loader.svg";
import styles from "./loader.module.scss";

export function Loader() {
  return (
    <div className={styles.loader}>
      <Image className="contact__form__confirm__img" alt={`Loading spinner`} src={loaderSVG} width={90} height={90} />
    </div>
  );
}
