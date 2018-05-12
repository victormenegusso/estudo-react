import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Crud from './CRUD_Material/Crud'
// <App /> é um componente declarado em public/components/App.js
ReactDOM.render(
    <Crud />,
    document.getElementById("app")
);
