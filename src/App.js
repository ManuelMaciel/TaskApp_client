import React from 'react';
//importar React Router DOM
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//importar los componentes de las rutas
import Login from './components/auth/Login';
import  NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

function App() {
  return (
    //se crean las rutas de acceso
    <Router>
      <Switch>
        
        <Route exact path='/' component={Login} />
        <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
        <Route exact path='/proyectos' component={Proyectos} />

      </Switch>
    </Router>
  );
}

export default App;

// Me quede en el video 199, habia que mostrar los datos listados desde listadotareas enviando al componente tarea