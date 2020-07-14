import React, { Component } from 'react';
import styled from 'styled-components';

class MaltsList extends Component {
    
    addMaltToBatch(malt) {
    return <li key={malt.key}>{malt.text} {malt.amount}</li>
    }

    render() {

        const listOfMalts = this.props.entries;
        const maltsList = listOfMalts.map(this.addMaltToBatch);
                
        return (
            <ul className="List">
                {maltsList}
            </ul>
        );
    }
    
}

export default MaltsList;