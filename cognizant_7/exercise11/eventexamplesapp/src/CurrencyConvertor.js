import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor() {
    super();
    this.state = {
      amount: "",
    };
  }

  handleChange = (event) => {
    this.setState({ amount: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const euroRate = 80;
    const converted = this.state.amount * euroRate;
    alert(`Converting to Euro Amount is ${converted}`);
  };

  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <h3>Currency Convertor!!!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Amount: </label>
          <input
            type="text"
            value={this.state.amount}
            onChange={this.handleChange}
          />
          <br /><br />
          <label>Currency: </label>
          <input type="text" value="Dollar" readOnly />
          <br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;
