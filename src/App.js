import { Header } from "./Components/Header";
import { Container } from "./Components/Container";
import "./App.css";
import { GlobalProvider } from "./Context/globalState"
function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <Container />
      </div>
    </GlobalProvider>
  );
}

export default App;
