import styled from "styled-components";

const Li = styled.li`
  color: #68707d;
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ItensMenu = ({ nome }) => {
  return (
    <>
      <Li>{nome}</Li>
    </>
  );
};

export default ItensMenu;
