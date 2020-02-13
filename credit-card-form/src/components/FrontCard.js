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
          <div className="chip pl-4">
            <img src="/images/chip.png" alt="card-chip"/>
          </div>

          <div className="flag">
          <img src="/images/mc-logo.png" alt="mc-logo"/>
          </div>
        </div>

        <div className="card-middle d-flex justify-content-start pl-2 mt-4">
          <div className="card-number">
            {
              this.props.getCardNumber.length ? this.props.getCardNumber : <p>•••• •••• •••• ••••</p>
            }
          </div>
        </div>

        <div className="card-bottom d-flex justify-content-between mt-3 ml-2">
          <div className="card-holder-name mt-3">
          {
            this.props.getCardName.length ? this.props.getCardName : <p>YOUR NAME HERE</p>
          }
          </div>

          <div className="expires mt-3">
            <p className='valid'>valid thru</p>
            {
              this.props.getCardExpires.length ? this.props.getCardExpires : <p className='dots'>••/••</p>
            }
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default FrontCard;