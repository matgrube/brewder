import React from 'react';
import styled from 'styled-components';
import Submenu from '../Submenu/Submenu';


const Menu = () => {
    return (
        <Wrapper>
            <List>
                <Item>Calc</Item>
                <Item>Brewing</Item>
                <Item>Fermentation</Item>
            </List>
            <Submenu />
        </Wrapper>
    )
}

export default Menu;

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    margin-top: 0px;
    height: 6vh;
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #001d4a;
    color: #c2d3cd;
`

const List = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
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

