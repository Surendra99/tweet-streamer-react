import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup} from 'react-bootstrap';

class App extends React.Component {

  componentDidMount() {
    const { cableApp } = this.props;
    cableApp.line = cableApp.cable.subscriptions.create({ 'channel': 'ConversationsChannel' }, {
      received: (tweet) => {
        console.log(tweet);
      }
    })
  }
  render() {
    return (
      <div className="App">
        Hello world
      </div>
    );
  }

}

export default App;
