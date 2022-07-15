// import React from 'react'
import './Coin.css';

// const Coin = () => {
//   return (
//     <div className="Coin"><img src="https://tinyurl.com/react-coin-heads-jpg" alt="heads" /></div>
//   )
// }

// export default Coin

import React, { Component } from 'react';

class Coin extends Component {
    render() {
        return <div className="Coin"><img src="https://tinyurl.com/react-coin-heads-jpg" alt="heads" />
        
        <img src="https://www.usmint.gov/wordpress/wp-content/uploads/2022/01/2022-kennedy-half-dollar-proof-reverse-300x300.jpg" alt="heads" />
        </div>
    }
}

export default Coin;