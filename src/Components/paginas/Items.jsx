import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Items = () => {
  return (
    <div>
      <section className='content price'>
        <h2 className='title'>Contáctanos</h2>
        <p>En caso de que necesites asesoramiento, contáctanos mediante el formulario.</p>
      </section>
      <section className='content contact'>
        <h2 className='titles'></h2>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="nombre@ejemplo.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>¿Qué problemas tienes?</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary">Enviar</Button>{' '}
        </Form>
      </section>
    </div>
  );
};

export default Items;
