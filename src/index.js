import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, long: null, errorMessage: ''};
  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        })
      },
      (err) => { this.setState({ errorMessage: err.message }) }
    );
  };

  renderContent() {
    return this.state.errorMessage
      ? ( <div>Error: {this.state.errorMessage}</div> )
      : (
          this.state.lat && this.state.long
          ? <SeasonDisplay lat={this.state.lat} />
          : <Spinner message="Please accept location request" />
        )
  }
  
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);