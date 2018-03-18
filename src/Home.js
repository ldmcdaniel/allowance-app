import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import Header from './Header';
import Body from './Body';

const Home = () => (
  <div>
    <Header title="Allowance App"></Header>
    <Body>
      <Link to='/welcome'>Welcome</Link>
    </Body>
  </div>
);

export default Home;
