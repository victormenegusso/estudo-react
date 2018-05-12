import React from 'react';

import PlacarContainer from './PlacarContainer';


const dados = {
    partida: {
        estadio: "Maracana",
        data: "21/05/1990",
        horario: "19h"
    },
    casa: {
        nome: "Vasco"
    },
    visitante: {
        nome: "Flamengo"
    }
}

//export default indica que quando alguem importar o arquivo, vai estar importando por default a class
export default class App extends React.Component {

    // indica o que vai ser renderizado
    render() {
        //return <h1> Galinha </h1>
        return (
            <div>
                <PlacarContainer partida={dados.partida} casa={dados.casa} visitante={dados.visitante}/>
            </div>
        );
    }

}