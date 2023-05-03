import React from 'react';

const Person = ({ name, surname, age }) => {
  return (
    <div>
      <span>Nombre: {name}</span>
      <br />
      <span>Apellido: {surname}</span>
      <br />
      <span>Edad: {age}</span>
    </div>
  );
};

export default Person