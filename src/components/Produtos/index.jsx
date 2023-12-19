import styled from "styled-components";
import Fotos from "./Fotos";
import styles from "./Produtos.module.css";

const Conteiner = styled.main`
    width: 997px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 91px 4%;
    gap: 126px;
    box-sizing: border-box;
`;

const Produto = () => {
  return (
    <Conteiner >
      <Fotos />
      <h1>produtos textos e afins</h1>
    </Conteiner>
  );
};

export default Produto;
