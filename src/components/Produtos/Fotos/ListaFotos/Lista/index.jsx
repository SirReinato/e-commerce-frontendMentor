import { useState } from "react";
import styled from "styled-components";

const AhLista = styled.li`
  width: 88px;
  height: 88px;
  box-sizing: border-box;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

const Lista = ({ foto, id }) => {
   const [teste, setTeste] = useState('');

    function QualFoi(event) {
        console.log(event.target.alt);
        return setTeste(event.target.alt);
    }

  return (
    <AhLista>
      <img 
        src={foto} 
        alt={id}
        onClick={QualFoi}
        />
    </AhLista>
  );
};

export default Lista;
