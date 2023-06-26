
import {Routes, Route, Link} from 'react-router-dom'
import React from "react";
import Header from './componentes/header/Header';
import Data from './componentes/data/data';

import BootstrapCSS from './bootstrap/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Header />
      <head>
        <link href={BootstrapCSS} rel="styleshet"></link>
        <link rel="stylesheet" type="text/css" href="css/estilo.css"></link>
      </head>
      <header> 
      </header>

      <main>
        <Routes>
          <Route path='/inicio'/>
          <Route element={<Data/>}path='/data'/>
        </Routes>
        
      </main>

    </div>
  );
}

export default App;
