import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render()  {
    return (
      <h2>Faça <Link to="/login">login</Link></h2>
    )
  }
}

export default Home;