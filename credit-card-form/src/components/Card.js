import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props) 
  }


  render(){
    return(
      <div>

        <div className="card-container p-3">

        <div className="card-top d-flex justify-content-between">
          <div className="chip">
            CHIP
          </div>

          <div className="flag">
            FLAG
          </div>
        </div>

        <div className="card-middle d-flex justify-content-start py-3">
          <div className="card-number">
            {this.props.cardNumber}
          </div>
        </div>

        <div className="card-bottom d-flex justify-content-between pt-3">
          <div className="card-holder-name">
          {this.props.cardName}
          </div>

          <div className="expires">
          {this.props.cardExpires}
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Card;