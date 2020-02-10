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
      <Card cardNumber={this.state.cardName} cardName={this.state.cardNumber} cardCvc={this.state.cvc} cardExpires={this.state.expires}   />
        <div className='form-container'>
        <form>
          <input onChange={this.handleInputChange} type="tel" name='cardNumber' placeholder='Card Number' maxLength='16'/>
          <input onChange={this.handleInputChange} type="text" name='cardName' placeholder='Name'/>
          <input onChange={this.handleInputChange} type="tel" name='expires' placeholder='Valid Thru'/>
          <input onChange={this.handleInputChange} type="tel" name='cvc' placeholder='CVC' max='3'/>
        </form>
        </div>

      </div>
    )
  }
}

export default Form;