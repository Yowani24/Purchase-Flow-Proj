import Carteira from "./components/carteira";
import Comprar from "./components/compra";
import Pagamento from "./components/pagamento";
import './GlobalStyles.css'

function App() {
  return (
    <div className="App">
      <Carteira/>
      <Comprar/>
      <Pagamento/>
    </div>
  );
}

export default App;
