import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route,Routes} from  "react-router-dom" 

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import About from "./components/About";
import Books from "./components/Books";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<App />} />
                <Route path="/About" element = {<About/>}/>
                <Route path='/Books' element = {<Books/>}/>
                                

            
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

