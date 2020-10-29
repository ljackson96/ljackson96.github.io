import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAsMVSEoc32rIza6OELpPEy9bgY4GkyP8s",
  authDomain: "portfolio-site-e5297.firebaseapp.com",
  databaseURL: "https://portfolio-site-e5297.firebaseio.com",
  projectId: "portfolio-site-e5297",
  storageBucket: "portfolio-site-e5297.appspot.com",
  messagingSenderId: "582909260827",
  appId: "1:582909260827:web:b60ad7a04f53ce15c434be",
  measurementId: "G-454JHCVR6K",
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
