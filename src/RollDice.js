import React , { Component } from 'react';
import './RollDice.css'
import Die from './Die'


class RollDice extends Component {
    static defaultProps ={
        sides: ["one", "two", "three", "four", "five", "six" ]
    }

    state = {
        die1:'one', 
        die2:'one',
        isRolling: false
    }

    roll = () => {
         const die1 = this.props.sides[
         Math.floor(Math.random() * this.props.sides.length)
        ];
        const die2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];

        this.setState({ die1, die2, isRolling: true })  
        
        setTimeout(() => {
            this.setState({isRolling: false})
        }, 500)
    }

    render () {
        return(
            <div className = "dice">
                <div className ="dice-container">
                    <Die face={this.state.die1} rolling = {this.state.isRolling }/>
                    <Die face={this.state.die2} rolling = {this.state.isRolling } />
                </div>
                <button onClick = {this.roll} disabled ={this.state.isRolling}>
                    {this.state.isRolling ? 'Rolling...' : 'Roll Dice'}
                </button>
                {!this.state.isRolling 
                    && 
                        <i class="fas fa-angle-double-up"></i>
                    }
            </div>
        )
    }
}

export default RollDice
