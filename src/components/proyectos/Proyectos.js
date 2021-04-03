import React from 'react';
//layouts
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
//componentes
import FormTarea from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';

const Proyectos = () => {
  return (  
    <div className='contenedor-app'>
      <Sidebar />
      <div className='seccion-principal'>
        <Header />
        <main>
        <FormTarea />
          <div className='contenedor-tareas'>
            <ListadoTareas />
          </div>
        </main>
      </div>
    </div>
  );
}
 
export default Proyectos;