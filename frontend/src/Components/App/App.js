import React from 'react';
import './App.css';
import PaymentForm from '../Forms/PaymentForm';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12"><PaymentForm /></div>
        </div>
      </div>
    );
  }
}

export default App;
