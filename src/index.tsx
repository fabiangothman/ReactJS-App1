import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from "reactfire";
import "bootstrap/dist/css/bootstrap.min.css";
//Components
import firebaseConfig from "./firebaseConfig";

ReactDOM.render(
    <FirebaseAppProvider firebaseConfig={firebaseConfig} >
      <Suspense fallback={"Conectando a la App..."}>
        <App />
      </Suspense>
    </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//reportWebVitals(console.log);
