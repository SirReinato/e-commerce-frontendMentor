import styled from "styled-components";
import styles from "./Fotos.module.css";
import ListaFotos from "./ListaFotos";

const Conteiner = styled.div`
  display: flex;
  width: 447px;
  height: 567px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 30px;
  flex-shrink: 0;
`;

const Fotos = ({ fotoSelecionada }) => {
  return (
    <Conteiner>
      <div className={styles.fotoZoom}>
        <img src={fotoSelecionada} alt="Foto selecionada pelo usuario" />
      </div>
      <ListaFotos />
    </Conteiner>
  );
};

export default Fotos;
