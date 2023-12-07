import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCtKlZ6V5aaSkJY4mM9DQus74VmK8hriRo",
  authDomain: "peachapi-c4606.firebaseapp.com",
  projectId: "peachapi-c4606",
  storageBucket: "peachapi-c4606.appspot.com",
  messagingSenderId: "308106291722",
  appId: "1:308106291722:web:c50dd3d277a84219b08df3"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
