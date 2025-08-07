import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Parent from './Parent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //component need to call here
    // <App/>  
    <Parent/>
);
