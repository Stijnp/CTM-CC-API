import React from 'react';

class PaymentForm extends React.Component {
    state = {
        value: ''
    }

    number = e => this.setState({ value: e.target.value })

    submitData = e => {
        const num = this.state.value;
        e.preventDefault();

        !num ? alert('Number is required') :
            fetch(`http://localhost:4000/numberValidation/${num}`)
                .then(response => response.json())
                .then(data => alert(`Card Type: ${data.number['Card Type']} \nPassed Luhn Check: ${data.number['Passed Luhn Check']}`));
    }

    // Only allow up to 16 numbers for credit card field. Only works with numbers.
    maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }

    render() {
        return (
            <div className="row">
                <h1 className="center">Payment details</h1>
                <h4>Test numbers:</h4>
                <div className="col s6">
                    <ul>
                        <li>VISA: 4111111111111111       (valid)</li>
                        <li>VISA: 4111111111111          (invalid)</li>
                        <li>VISA: 4012888888881881       (valid)</li>
                        <li>AMEX: 378282246310005        (valid)</li>
                    </ul>
                </div>
                <div className="col s6">
                    <ul>
                        <li>Discover: 6011111111111117   (valid)</li>
                        <li>MasterCard: 5105105105105100 (valid)</li>
                        <li>MasterCard: 5105105105105106 (invalid)</li>
                        <li>Unknown: 9111111111111111    (invalid)</li>
                    </ul>
                </div>
                <form className="col s12" onSubmit={this.submitData.bind(this)}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="cardNumber" type="number" maxLength="16" onInput={this.maxLengthCheck} onChange={this.number} />
                            <label htmlFor="cardNumber">Card Number*</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light">Check Input</button>
                </form>
            </div>
        );
    }
}

export default PaymentForm;