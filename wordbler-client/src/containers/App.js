import React, { Component } from 'react';
import {Provider} from "react-redux";
import {configureStore} from "../store";
import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <div>Hello World</div>
  </Provider>
);

export default App;
