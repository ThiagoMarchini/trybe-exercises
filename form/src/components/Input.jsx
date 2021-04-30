import React from 'react';

class Input extends React.Component {
  render() {
    const { label, type, name, handleChange, value } = this.props;
    return (
      <label>
        {label}
        <br />
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </label>
    )
  }
}

export default Input;