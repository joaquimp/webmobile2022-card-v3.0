import styled from "styled-components";

export const H1 = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.texto1};
  margin: 0px;
`;

export const P = styled.p`
  font-size: 0.8rem;
  line-height: 2.1;
  font-weight: 100;
  color: ${(props) => props.theme.texto2};
  margin: 0px;
`;
