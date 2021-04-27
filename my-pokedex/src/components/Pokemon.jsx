import React, { Component } from 'react';

class Pokemon extends Component {
  render() {

    return (
      // returns: name, tipe, weight (+unit), image
      <div className='pokemon'>
        <img src={this.props.image} alt={this.props.name} />
        <hr />
        <p>Name: {this.props.name}<br />
        Type: {this.props.type}<br />
        Weight: {this.props.averageWeight.value}{this.props.averageWeight.measurementUnit} (average)
        </p>
      </div>
    );
  }
}

export default Pokemon;