import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Parent from './Parent';
import MapDemo from './MapDemo';
import GetInputValue from './GetInputValue';
import GetInputValue_State from './GetInputValue_State';
import Spread from './Spread';
import UseEffecDemo from './UseEffecDemo';
import UseMemoD from './UseMemoD';
import HOC from './HOC';
import UseContext_1 from './UseContext_1';
import FormDemo from './FormDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //component need to call here
    // <App/> 
    // <GetInputValue/> 
    // <GetInputValue_State/>
    // <UseEffecDemo/>
    // <UseMemoD/>
    // <HOC/>
    // <UseContext_1/>
    <FormDemo/>
    
);
