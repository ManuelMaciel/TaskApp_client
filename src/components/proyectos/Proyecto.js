import React from 'react';

const Proyecto = ({p}) => {
  console.log(p);
  return ( 
    <li>
      <button
        type='button'
        className='btn btn-blank'
      >{p.nombre}</button>
    </li>
   );
}
 
export default Proyecto;