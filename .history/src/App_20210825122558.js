import Carteira from "./components/carteira";
import Comprar from "./components/compra";
import Movimentos from "./components/movimentos";
import Pagamento from "./components/pagamento";
import './GlobalStyles.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useEffect, useState } from "react";

function App() {
  const valorAtual = 102;
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Carteira}/>
        <Route path="/comprar" valorAtual={valorAtual} component={Comprar}/>
        <Route path="/pagamento"  component={Pagamento}/>
        <Route path="/movimentos" component={Movimentos}/>
      </Switch>
    </Router>
  );
}

export default App;
