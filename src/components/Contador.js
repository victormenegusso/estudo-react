import React from 'react';

export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            contador: 0
        }
    }

    decrementar() {
        this.setState({
            contador: this.state.contador - 1
        });
    }

    incrementar() {
        this.setState({
            contador: this.state.contador + 1
        });
    }

    // .bind(this) estamos passando o contexto
    render() {
        return (
            <div>
                <h1>{this.state.contador}</h1>
                <div>
                    <button onClick={this.incrementar.bind(this)}>+</button>
                    <button onClick={this.decrementar.bind(this)}>-</button>
                </div>
            </div>
        );
    }
}