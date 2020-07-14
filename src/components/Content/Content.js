import React from 'react';
import styled from 'styled-components';
import CalcExtract from '../Calc/CalcExtract/CalcExtract';
const Content = () => {
    return (
        <Wrapper>
            <CalcExtract />
        </Wrapper>
    )
}

export default Content;

const Wrapper = styled.div`
    width: 100%;
    max-width: 1400px;
    background-color: grey;
    height 100vh;
    margin: 0 auto;
` 