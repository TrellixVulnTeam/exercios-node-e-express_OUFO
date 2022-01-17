import React, { Component } from 'react';
export default class Saudacao extends Component {
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props);
        this.setTipo = this.setTipo.bind(this)
        this.setName = this.setName.bind(this)
    }

    setTipo(e) {

        this.setState({ tipo: e.target.value })
    }

    setName(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" name="" placeholder='Tipo..' onChange={this.setTipo} value={tipo} id="" />
                <input type="text" name="" placeholder='Nome' onChange={this.setName} value={nome} id="" />
            </div>
        )
    }
}