import { Link } from "react-router-dom";
import styled from "styled-components";

export const ConfirmButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 50px;
  border-radius: 40px;
  background-color: ${(props) => props.theme.acao};
  border: none;
  color: ${(props) => props.theme.texto1};
  cursor: pointer;
  &:active {
    background-color: ${(props) => props.theme.texto2};
  }
`;

export const ConfirmButtonDisabled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 50px;
  border-radius: 40px;
  background-color: ${(props) => props.theme.botao};
  border: none;
  color: ${(props) => props.theme.texto2};
`;

export const NumberButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NumberButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 48px;
  border: none;
  background-color: ${(props) =>
    props.ativo ? props.theme.acao : props.theme.botao};
  color: ${(props) => (props.ativo ? props.theme.texto1 : props.theme.texto2)};
  cursor: pointer;
  &:hover {
    color: var(--texto1);
    background-color: ${(props) =>
      props.ativo ? props.theme.acao : props.theme.botaoFoco};
  }
`;
