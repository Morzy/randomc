import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//import 'bootstrap/dist/js/bootstrap';
const { Route, BrowserRouter, Routes } = require("react-router-dom");

import { configureStore } from '@reduxjs/toolkit';
import { caculate } from './redux/Caculate';
import { connect, Provider } from 'react-redux';

const store = configureStore({ reducer: caculate })

store.subscribe(() => {
  console.log(store.getState())
})

function add() {
  return { type: "Add" }
}
let mapDispatchToProp = { add }
let Smart = connect(null, mapDispatchToProp)(App);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={'/'}>
      <Provider store={store}>
        <Smart />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
