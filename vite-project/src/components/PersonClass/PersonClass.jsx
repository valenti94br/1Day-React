import React, { Component } from 'react';

class PersonClass extends Component {
  render() {
    const { name, surname, age } = this.props;
    return (
      <div>
        <span>Nombre: {name}</span>
        <br />
        <span>Apellido: {surname}</span>
        <br />
        <span>Edad: {age}</span>
      </div>
    );
  }
}

export default PersonClass;
