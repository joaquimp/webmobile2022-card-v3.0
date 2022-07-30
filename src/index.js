import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Agradecimento from "./routes/agradecimento";
import Avaliacao from "./routes/avaliacao";

// import "./styles.css";
import GlobalCSS from "./styles";
import { ThemeProvider } from "styled-components";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const theme = {
  fundo: "#141519",
  gradiente: "linear-gradient(0deg, #171e28 0%, #1e252f 100%)",
  acao: "#fc7613",
  acao2: "#fc7413cb",
  texto1: "#fafafa",
  texto2: "#8e94a0",
  botao: "#262f38",
  botaoFoco: "#8e94a0"
};

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Routes>
        <Route path="/" element={<Avaliacao />} />
        <Route path="/agradecimento" element={<Agradecimento />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);
