import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <Wrapper>
            <Titles>
                <Title>BrewDer</Title>
                <Title2>Your Beer Bro</Title2>
            </Titles>
            <Buttons>
                <Item>App</Item>
                <Item>About</Item>
                <Item>Contact</Item>
            </Buttons>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin-top: 0px;
  height: 6vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: #001d4a;
  color: #c2d3cd;
`

const Item = styled.li`
  flex-grow: 1;
  justify-content: space-between;
  display: block; 
  align-items: stretch;
  width: 33%;
  height: 100%;
  text-align: center;
  line-height: 6vh;
`

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`

const Title = styled.h1`
  font-size: 1.2rem;
`

const Title2 = styled.h3`
  font-size: 0.7rem;
`

const Buttons = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
`

export default Navbar;