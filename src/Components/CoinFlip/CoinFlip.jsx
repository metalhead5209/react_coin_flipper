import React, { Component } from 'react';
import { choice } from "helpers"; 

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