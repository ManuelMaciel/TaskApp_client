import React from 'react';
//importar React Router DOM
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//importar los componentes de las rutas
import Login from './components/auth/Login';
import  NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';
//importamos el provider
import ProyectoState from './context/proyectos/proyectoState';

function App() {
  return (
    <ProyectoState>
    {/* se crean las rutas de acceso */}
    <Router>
      <Switch>
        
        <Route exact path='/' component={Login} />
        <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
        <Route exact path='/proyectos' component={Proyectos} />

      </Switch>
    </Router>
    </ProyectoState>
  );
}

export default App;
