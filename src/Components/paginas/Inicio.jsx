import React from 'react';
import imagen1 from '../assets/imagen1.png';
import imagen2 from '../assets/imagen2.png';
import imagen3 from '../assets/imagen3.png';
import imagen4 from '../assets/imagen4.png';
import imagen5 from '../assets/imagen5.png';
import logo2 from '../assets/Labores-removebg-preview.png';

export const Inicio = () => {
  return (
    <div>
      <section className='section1'>
        <img src={imagen1} alt="" />
        <img src={imagen2} alt="" />
        <img src={imagen3} alt="" />
        <img src={imagen4} alt="" />
        <img src={imagen5} alt="" />
      </section>
      <section className='content sau'>
        <h2 className='title'>¿Qué somos?</h2>
        <p>
          Nuestra misión es facilitar las labores en una granja. Las labores en una granja agropecuaria son diversas y pueden variar según el tipo de granja, el tamaño de la operación y los cultivos o animales que se críen. Las labores en una granja agropecuaria son diversas y abarcan desde la preparación del suelo y la siembra hasta la cosecha, el cuidado de los animales, la gestión de recursos y la comercialización de productos. La agricultura y la ganadería son actividades esenciales que proporcionan alimentos y otros productos a la sociedad y requieren un esfuerzo constante y un conocimiento especializado para tener éxito.
        </p>
        <div className='box-container'>
          <div className='box'>
            <i className='fab fa-angular'></i>
            <h3>¿Para qué?</h3>
            <p>Hacemos esto para ayudar a facilitar a nuestros usuarios.</p>
          </div>
          <div className='box'>
            <i className='fab fa-causa'></i>
            <h3>¿A quiénes?</h3>
            <p>A aquellas personas que necesiten un control en las labores de la granja.</p>
          </div>
          <div className='box'>
            <i className='fab fa-pe'></i>
            <h3>¿Por qué?</h3>
            <p>Para hacer un bien tanto a ellos como a nosotros.</p>
          </div>
        </div>
      </section>
      <footer className='final'>
        <img src={logo2} alt="" className='logo2' />
        <h4 className='final2'>Hecho por:</h4>
        <p className='final3'>Daniel Cristiano</p>
      </footer>
    </div>
  );
};

export default Inicio;
