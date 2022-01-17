import React from "react";
import ReactDOM from "react-dom";
import First from "./components/bomdia";
import Multi, { BoaNoite, BoaTarde } from './components/multiplos'
import Saudacao from "./components/saudacoes";
import Pai  from './components/Pai'
import Filho from './components/filho'

ReactDOM.render(
    <div>
      <Pai sobrenome='Novais' nome='João'>
            <Filho nome='Pedro' />
            <Filho nome='Joaquim' />
            <Filho  nome='Carla' />
      </Pai>
    </div>, document.getElementById('root'))