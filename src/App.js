import Home from "./pages/Home";
import { Reset } from "styled-reset";
import GlobalStyle from "./themes/globalStyles";
import { GithubProvider } from "./services/api";

function App() {
  return (
    <GithubProvider>
      <Reset />
      <GlobalStyle />
      <Home />
    </GithubProvider>
  );
}

export default App;
