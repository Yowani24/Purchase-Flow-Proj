import Carteira from "./components/carteira";
import Comprar from "./components/compra";
import Movimentos from "./components/movimentos";
import Pagamento from "./components/pagamento";
import './GlobalStyles.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useEffect, useState } from "react";

function App(props) {
  const [valorAtual,setValorAtual] = useState(102);
  const [quantidade, setQuantidade] = useState(0);
  const [total,setTotal] = useState(0);

  useEffect(() => {
    setTotal(valorAtual * quantidade);
  });


  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Carteira}/>
        <Route path="/comprar" setQuantidade={setQuantidade} total={total} component={Comprar}/>
        <Route path="/pagamento"  component={Pagamento}/>
        <Route path="/movimentos" component={Movimentos}/>
      </Switch>
    </Router>
  );
}

export default App;
