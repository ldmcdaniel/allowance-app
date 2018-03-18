import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import Header from './Header';
import Body from './Body';

const Welcome = () => (
  <div>
    <Header title="Welcome"></Header>
    <Body>
      <Link to='/'>Home</Link>
    </Body>
  </div>
);

export default Welcome;
