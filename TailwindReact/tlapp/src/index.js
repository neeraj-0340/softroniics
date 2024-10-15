import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { New } from './New';
import { Work1 } from './Work1';
import { Register } from './Register';
import { Login } from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { First } from './First';
import { Home } from './Home';
import { Contact } from './Contact';
import { About } from './About';
import { Count } from './Count';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter> */}
   {/* <New/> */}
   {/* <Work1/> */}
   {/* <First/> */}
   <Count/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
