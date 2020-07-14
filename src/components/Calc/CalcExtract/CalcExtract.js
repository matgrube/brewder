import React, { Component } from 'react';
import styled from 'styled-components';
import MaltsList from './MaltsList';

class CalcExtract extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            malts: []
        };

        this.addMalt = this.addMalt.bind(this);
    }
    
    addMalt(e) {
        if(this._inputElement.value !== "") {
            let newItem = {
                text: this._inputElement.value,
                key: Date.now(),
                amount: this._inputAmount.value,
                extraction: this._inputExtraction.value
            }
        
            this.setState((prevState) => {
                return {
                    malts: prevState.malts.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }
        
    console.log(this.state.malts);
    
    e.preventDefault();
    }


    render() {
        return (
            <Wrapper>
                <div>
                    <p>Malt List</p>
                    <form onSubmit={this.addMalt}>
                        <input type="text" id="name" ref={(a)=> this._inputElement = a} placeholder="Malt type"></input>
                        <input type="number" id="amount" ref={(a) => this._inputAmount = a} placeholder="Kgs"></input>
                        <input type="number" id="extraction" ref={(a) => this._inputExtraction = a} placeholder="%"></input>
                        <button type="submit">Klik</button>
                    </form>
                </div>
                <MaltsList entries={this.state.malts}/>
            </Wrapper>
            
        );
    } 
}

const Wrapper = styled.div`
    
`

export default CalcExtract;