import Container from "./components/Container";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <main>
          <p>Conteudo principal</p>
        </main>
      </Content>
    </Container>
  );
}

export default App;
