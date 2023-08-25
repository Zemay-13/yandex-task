import { Link, animateScroll as scroll } from "react-scroll";
import circleLogo from "../assets/image/decorPurple.svg";

import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <img src={circleLogo} alt="logo" />
        <h1>Hello</h1>
      </div>
      <div className={styles.header__container}>
        <nav className={styles.container__nav}>
          <Link
            activeClass="AboutContent"
            to="AboutContent"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Ответы на вопросы
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
