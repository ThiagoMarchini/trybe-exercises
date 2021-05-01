import React from 'react';

class Select extends React.Component {
  render() {
    const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

    const { label, name, value, handleChange, required } = this.props;

    return (
      <label>
        {label}
        <select name={name} value={value} onChange={handleChange} required={required}>
          {states.map((state) => (<option value={state}>{state}</option>))}
        </select>
      </label>
    );
  }
}

export default Select;