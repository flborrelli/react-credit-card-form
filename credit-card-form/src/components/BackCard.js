import React, { Component } from 'react';

class BackCard extends Component {
  constructor(props){
    super(props) 
  }


  render(){
    return(
      <div>

        <div className="card-container p-3">

        <div className="card-back d-flex justify-content-between">
          <div className="cvc">
            {this.props.getCardCvc.length ? this.props.getCardCvc : <div>CVC</div> }
          </div>

        
        </div>
        </div>
      </div>
    )
  }
}

export default BackCard;