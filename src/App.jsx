import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className='container'>
           < Header />
           < Body />
           < Footer />
   
        </div>
    );
}