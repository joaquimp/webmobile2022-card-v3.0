import { Body, Card } from "../components/cad.style";
import { useQuery } from "../util";
import styled from "styled-components";
import { H1, P } from "../components/typography";
import { ConfirmButton } from "../components/inputs.style";

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.botao};
  height: 48px;
  border-radius: 24px;
  color: ${(props) => props.theme.acao};
`;

export default function Agradecimento() {
  const query = useQuery();
  const nota = query.get("nota");

  if (nota > 0 && nota <= 5) {
    return (
      <Body>
        <Card>
          <img src="/imagens/feedback.svg" alt="feedback" />
          <Rating>Você deu a nota {nota} de 5</Rating>
          <H1 style={{ textAlign: "center" }}>Obrigado!</H1>
          <P style={{ textAlign: "center" }}>
            Estamos felizes e agradecidos por usar parte do seu tempo para dar
            sua opinião. Se precisar de ajuda futuramente pode nos procurar!
          </P>
        </Card>
      </Body>
    );
  } else {
    // nota inválida
    return (
      <Body>
        <Card>
          <img src="/imagens/feedback.svg" alt="feedback" />
          <Rating>Nota inválida</Rating>
          <P style={{ textAlign: "center" }}>
            aconteceu algum problema, por favor, faça novamente sua avaliação.
          </P>
          <ConfirmButton to="/">REFAZER AVALIAÇÃO</ConfirmButton>
        </Card>
      </Body>
    );
  }
}
