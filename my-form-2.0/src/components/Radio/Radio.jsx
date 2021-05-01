import React from 'react';

class Radio extends React.Component {
  render() {
    const { type, name, value, handleChange, required } = this.props;
    return (
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
        />
    )
  }
}

export default Radio;