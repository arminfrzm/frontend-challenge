import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContainer from "./containers/AppContainer";
import { BrowserRouter } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { HelmetProvider } from "react-helmet-async";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <HelmetProvider>
      <AppContainer />
    </HelmetProvider>
  </BrowserRouter>
</Provider>
);
