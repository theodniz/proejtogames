import {Routes, Route, Link} from 'react-router-dom'
import React from "react";
import Data from './componentes/data/data';

import BootstrapCSS from './bootstrap/css/bootstrap.min.css'


function App() {
  return (
    <html>
      <head>
          <link href={BootstrapCSS} rel="styleshet"></link>
          <link rel="stylesheet" type="text/css" href="css/estilo.css"></link>
      </head>
      <body>
        <div className="App">
            <header>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/data">Jogos</Link></li>
              </ul>
            </header>
            <main>
              <Routes>
                <Route path='/' />
                <Route element={<Data/>} path='/data'/>
              </Routes>
              
            </main>

        </div>
      </body>
    </html>
    
  );
}

export default App;