import styles from "./Header.module.css";
import ItensMenu from "./Nav";
import logo from "./logo.svg";
import avatar from "./image-avatar.png";
import carrinho from "./icon-cart.svg";

const Header = () => {
  return (
    <header className={styles.conteiner}>
      <nav className={styles.nav}>
        <div className={styles.p1}>
          <figure>
            <img src={logo} alt="logo do nosso site" />
          </figure>
          <ul className={styles.lista}>
            <ItensMenu nome={"Collections"} />
            <ItensMenu nome={"Men"} />
            <ItensMenu nome={"Women"} />
            <ItensMenu nome={"About"} />
            <ItensMenu nome={"Contact"} />
          </ul>
        </div>
        <div className={styles.p2}>
          <figure>
            <div className={styles.notificacao}></div>
            <img src={carrinho} alt="Carrinho de compras" />
          </figure>

          <figure>
            <img className={styles.avatar} src={avatar} alt="Avatar do camarada" />
          </figure>
        </div>
      </nav>
    </header>
  );
};

export default Header;
