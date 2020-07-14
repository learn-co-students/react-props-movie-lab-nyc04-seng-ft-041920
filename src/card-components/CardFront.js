import React, { Component } from 'react';

class CardFront extends Component {

  render() {
    console.log("Inside CardFront, ", this.props)
    const { poster } = this.props
    return (
      <div className="card-front" style={{backgroundImage: `url(${poster})`}}>
      </div>
    )
  }
}

export default CardFront;