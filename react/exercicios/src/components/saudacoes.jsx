import React, { Component } from 'react';
export default class Saudacao extends Component {

    state = {
        tipo: 'fala',
        nome: 'Pedro'
    }

    setTipo(e) {
        
        this.setState({ tipo: e.target.value })
    }

    setName(e){
        this.setState({nome: e.target.value})
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" name="" placeholder='Tipo..' onChange={e => this.setTipo(e)} value={tipo} id="" />
                <input type="text" name="" placeholder='Nome'  onChange={e=> this.setName(e)} value={nome} id="" />
            </div>
        )
    }
}