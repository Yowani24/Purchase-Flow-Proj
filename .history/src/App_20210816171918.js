import Carteira from "./components/carteira";
import Comprar from "./components/compra";
import Movimentos from "./components/movimentos";
import Pagamento from "./components/pagamento";
import './GlobalStyles.css'

function App() {
  return (
    <div className="App">
      <Carteira/>
      <Comprar/>
      <Pagamento/>
      <Movimentos/>
    </div>
  );
}

export default App;
