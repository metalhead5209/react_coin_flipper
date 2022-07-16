import React, { Component } from 'react';
import { choice } from '../.././helper'

class CoinFlip extends Component {
    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
            {side: 'tails', imgSrc: "https://www.usmint.gov/wordpress/wp-content/uploads/2022/01/2022-kennedy-half-dollar-proof-reverse-300x300.jpg"}
        ]
    };
    constructor(props){
        super(props);
        this.state = {
            curCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            let newState = {
                ...st,
                currCoin: newCoin,
                nFlips: st.nFlips + 1
            }
            if(newCoin.side === 'heads'){
                //add one to nHeads
                newState.nHeads += 1;
            } else {
                newState.nTails += 1;
            }
            return newState;
        })
    }

    handleClick(e) {
        this.flipCoin();
    }
    render(){
        return (
            <div className="CoinFlip">
                <h2>Lets Flip a Coin!</h2>
                <button onClick={this.handleClick}>Flip Me!</button>
                <p>
                    Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.
                </p>
            </div>
        )
    }
}
export default CoinFlip