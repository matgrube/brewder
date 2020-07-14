import React from 'react';
import './App.css';
import styled from 'styled-components';
import { createStore } from 'redux';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar />
        <Menu />
        <Content />
      </Wrapper>
    </div>
  );
}

const CONTENT_STATE = () => {
}

const store = createStore(CONTENT_STATE);

export default App;


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;