import React, { Component } from 'react';

class FrontCard extends Component {
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
            •••• •••• •••• ••••
            {this.props.getCardNumber}
          </div>
        </div>

        <div className="card-bottom d-flex justify-content-between pt-3">
          <div className="card-holder-name">
          {
            this.props.getCardName.length ? this.props.getCardName : <p>YOUR NAME HERE</p>
          }
          </div>

          <div className="expires">
          <p>valid thru</p>
          •• / ••
          {this.props.getCardExpires}
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default FrontCard;