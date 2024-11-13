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
import { Togglebgcolor } from './Togglebgcolor';
import { Datafetching } from './Datafetching';
import { APIfetching } from './APIfetching';
import { Colorswitching } from './Colorswitching';
import { Axiosfetching } from './Axiosfetching';
import { Moviedetails } from './Moviedetails.jsx';
import { Weatherapp } from './Weatherapp.jsx';
import { Formsubmission } from './Formsubmission.jsx'
import { Formmm } from './Formmm.jsx';
import { Keysdata } from './Keysdata.jsx';
import { Tasktoggle } from './Tasktoggle.jsx';
import { Main } from './rendering/Main.jsx';
import { Main1 } from './student management/Mainstd.jsx';
import { Newfile } from './Newfile.jsx';
import { Contextprovider } from './Contextprovider.jsx';
import { Counterapp } from './Counterapp.jsx';
import { Calculator } from './Calculator.jsx';
import Doubt from './Doubt.jsx';
import { Provider } from 'react-redux';
import Store from './Store.jsx';
import Counter from './Counter.jsx';
import { Flipkart } from './Flipkart.jsx';
import { Cart } from './Cart.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/movie" element={<Formsubmission/>}></Route>
      <Route path="/moviedet/:imdbID" element={<Moviedetails/>}></Route>
      <Route path="/new" element={<New/>}></Route>
      <Route path="/work1" element={<Work1/>}></Route>
      <Route path="/first" element={<First/>}></Route>
      <Route path="/count" element={<Count/>}></Route>
      <Route path="/togglebgcolor" element={<Togglebgcolor/>}></Route>
      <Route path="/datafetching" element={<Datafetching/>}></Route>
      <Route path="/APIfetching" element={<APIfetching/>}></Route>
      <Route path="/colorswitching" element={<Colorswitching/>}></Route>
      <Route path="/axiosfetching" element={<Axiosfetching/>}></Route>
      <Route path="/weather" element={<Weatherapp/>}></Route> 
      <Route path="/form" element={<Formmm/>}></Route>
      <Route path="/key" element={<Keysdata/>}></Route>
      <Route path="/task" element={<Tasktoggle/>}></Route>
      <Route path="/render" element={<Main/>}></Route>
      <Route path="/stdrender" element={<Main1/>}></Route>
      <Route path="/context" element={<Newfile/>}></Route>
      <Route path="/counterapp" element={<Counterapp/>}></Route>
      <Route path="/calculator" element={<Calculator/>}></Route>
      <Route path="/flipkart" element={<Flipkart/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter>
    </Provider>
   {/* <New/> */}
   {/* <Work1/> */}
   {/* <First/> */}
   {/* <Count/> */}
   {/* <Togglebgcolor/> */}
   {/* <Datafetching/> */}
   {/* <APIfetching/> */}
   {/* <Colorswitching/> */}
   {/* <Axiosfetching/> */}
   {/* <Formsubmission/> */}
   {/* <Calculator/> */}
   {/* <Home/> */}
   {/* <Doubt/> */}

   <Contextprovider><Newfile></Newfile></Contextprovider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
