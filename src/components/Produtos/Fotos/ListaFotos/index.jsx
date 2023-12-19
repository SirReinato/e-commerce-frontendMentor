import styled from "styled-components";
import listaJson from "../../../../json/tenisLista.json"
import Lista from "./Lista";

const Conteiner = styled.ul`
  width: 447px;
  height: 92px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
`;

const ListaFotos = () => {
  return (
    <Conteiner>
      {listaJson.map(foto =>{
        return(
            <Lista foto={foto.path} id={foto.id} key={foto.id}/>
        )
      })}
    </Conteiner>
  );
};

export default ListaFotos;
