import Carteira from "./components/carteira";
import Comprar from "./components/compra";
import Movimentos from "./components/movimentos";
import Pagamento from "./components/pagamento";
import './GlobalStyles.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useState } from "react";

function App(props) {
  const [saldo,setSaldo] = useState(11);
  return (
    <Router>
      <Switch>
        <Route path="/" exact saldo={saldo} component={Carteira}/>
        <Route path="/comprar" component={Comprar}/>
        <Route path="/pagamento"  component={Pagamento}/>
        <Route path="/movimentos" component={Movimentos}/>
      </Switch>
    </Router>
  );
}

export default App;
