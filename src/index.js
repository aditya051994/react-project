import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Parent from './Parent';
import MapDemo from './MapDemo';
import GetInputValue from './GetInputValue';
import GetInputValue_State from './GetInputValue_State';
import Spread from './Spread';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //component need to call here
    // <App/> 
    // <GetInputValue/> 
    // <GetInputValue_State/>
    <Spread/>
    
);
