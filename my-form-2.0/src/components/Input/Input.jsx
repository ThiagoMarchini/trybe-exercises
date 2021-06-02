import React from 'react';

class Input extends React.Component {
  render() {
    const { label, type, name, maxLength, value, handleChange, required } = this.props;
    return (
      <label>
        {label}
        <br />
        <input
          type={type}
          name={name}
          value={value}
          maxLength={maxLength}
          onChange={handleChange}
          required={required}
        />
      </label>
    )
  }
}

export default Input;