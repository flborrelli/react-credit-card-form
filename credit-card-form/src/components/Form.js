import React, { Component } from 'react';
import Card from './Card';


class Form extends Component {
  constructor(props){
    super(props)

    this.state = {
      cardNumber: '',
      cardName: '',
      cvc: '',
      expires: '',
    } 

    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(event){
        const { name, value } = event.target;
        this.setState({
          [name]: value,
        })
      }

  render(){
    console.log(this.state)
    return(
      <div>
      <Card getCardNumber={this.state.cardNumber} getCardName={this.state.cardName} getCardCvc={this.state.cvc} getCardExpires={this.state.expires}   />
        <div className='form-container mt-5'>
        <form className='d-flex flex-column'>
          <input className='mb-2' onChange={this.handleInputChange} type="tel" name='cardNumber' placeholder='Card Number' maxLength='16'/>
          <input className='mb-2' onChange={this.handleInputChange} type="text" name='cardName' placeholder='Name'/>
          <div className="d-flex justify-content-between">
            <input onChange={this.handleInputChange} type="tel" name='expires' placeholder='Valid Thru'/>
            <input onChange={this.handleInputChange} type="tel" name='cvc' placeholder='CVC' max='3'/>
          </div>
        </form>
        </div>

      </div>
    )
  }
}

export default Form;