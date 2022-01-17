import React from "react";
import ReactDOM from "react-dom";
import First from "./components/bomdia";
import Multi, { BoaNoite, BoaTarde } from './components/multiplos'
import Saudacao from "./components/saudacoes";
ReactDOM.render(
    <div>
      <Saudacao tipo='Bom dia' nome='João'/>
    </div>, document.getElementById('root'))