import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TweetsList from './components/TweetsList';

class App extends React.Component {
  render() {
    const {cableApp} = this.props;
    return (
      <div className="App">
        <TweetsList cableApp={cableApp}/>
      </div>
    );
  }

}

export default App;
