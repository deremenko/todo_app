import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class Root extends Component {
  render() {
    return (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);


