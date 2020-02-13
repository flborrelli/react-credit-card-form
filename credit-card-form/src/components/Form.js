import React, { Component } from "react";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import ReactCardFlip from "react-card-flip";
import NumberFormat from "react-number-format";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardNumber: "",
      cardName: "",
      cvc: "",
      expires: "",
      isFlipped: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClickFront = this.handleClickFront.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
  }

  changeDots() {
    const dots = "•";
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value.toUpperCase()
      // cardNumber: value + dots * (16 - value.length),
    });
  }

  handleClickFront(event) {
    event.preventDefault();
    this.setState({
      isFlipped: false
    });
  }

  handleClickBack(event) {
    event.preventDefault();
    this.setState({
      isFlipped: true
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="mb-5">
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
        >
          <FrontCard
            getCardNumber={this.state.cardNumber}
            getCardName={this.state.cardName}
            getCardCvc={this.state.cvc}
            getCardExpires={this.state.expires}
          />
          <BackCard getCardCvc={this.state.cvc} />
        </ReactCardFlip>
        <div className="form-container mt-5">
          <form className="d-flex flex-column">
            <NumberFormat
              format="#### #### #### ####"
              placeholder='•••• •••• •••• ••••'
              mask={["•", "•", "•", "•", "•", "•", "•", "•", "•", "•", "•", "•", "•", "•", "•", "•"]}
              className="mb-2"
              onChange={this.handleInputChange}
              onClick={this.handleClickFront}
              name="cardNumber"
              placeholder="Card Number"
            />
            <input
              className="mb-2"
              onChange={this.handleInputChange}
              onClick={this.handleClickFront}
              type="text"
              name="cardName"
              placeholder="Name"
            />
            <div className="d-flex justify-content-between">
              <NumberFormat
                format="##/##"
                placeholder="••/••"
                mask={["•", "•", "•", "•"]}
                onChange={this.handleInputChange}
                onClick={this.handleClickFront}
                name="expires"
                placeholder="Valid Thru"
              />
              <input
                onChange={this.handleInputChange}
                onClick={this.handleClickBack}
                type="tel"
                name="cvc"
                placeholder="CVC"
                max="3"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
