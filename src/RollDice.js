import React , { Component } from 'react';
import './RollDice.css'
import Die from './Die'


class RollDice extends Component {
    static defaultProps ={
        sides: ["one", "two", "three", "four", "five", "six" ]
    }

    state = {
        die1:'one', 
        die2:'one'
    }

    roll = () => {
         const die1 = this.props.sides[
         Math.floor(Math.random() * this.props.sides.length)
        ];
        const die2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];

        this.setState({ die1, die2 })
           
    }

    render () {
        return(
            <div className = "dice">
                <div className ="dice-container">
                    <Die face={this.state.die1} />
                    <Die face={this.state.die2} />
                </div>
                <button onClick = {this.roll}>Roll Dice</button>
            </div>
        )
    }
}

export default RollDice
