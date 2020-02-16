import React from 'react';
import styled from 'styled-components';

const Submenu = () => {
    return (
        <List>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
        </List>
    )
};

const List = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
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

export default Submenu;