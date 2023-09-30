import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const Crear = () => {
  const [formulariodos, setFormulario] = useState({
    usuario: "",
    contraseña: "",
    correo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulariodos, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formulariodos);
  };

  return (
    <div className="cuadro">
      <form onSubmit={handleSubmit} className="form-register">
        <h3>Formulario</h3>
        <input
          className="controls"
          type="text"
          name="usuario"
          placeholder="Nombre de usuario"
          value={formulariodos.usuario}
          onChange={handleInputChange}
        />
        <input
          className="controls"
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          value={formulariodos.contraseña}
          onChange={handleInputChange}
        />
        <input
          className="controls"
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={formulariodos.correo}
          onChange={handleInputChange}
        />
        <Button type="submit" className="botons">
          REGISTRARSE
        </Button>
      </form>
    </div>
  );
};

export default Crear;
