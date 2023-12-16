import styles from "./Header.module.css";
import ItensMenu from "./Nav";
import logo from "./logo.svg";

const Header = () => {
  return (
    <header className={styles.conteiner}>
      <nav className={styles.nav}>
        <div className={styles.p1}>
          <figure>
            <img src={logo} alt="logo do nosso site" />
          </figure>
          <ul className={styles.lista}>
            <ItensMenu nome={'Collections'}/>
            <ItensMenu nome={'Men'}/>
            <ItensMenu nome={'Women'}/>
            <ItensMenu nome={'About'}/>
            <ItensMenu nome={'Contact'}/>
          </ul>
        </div>

      </nav>
    </header>
  );
};

export default Header;
