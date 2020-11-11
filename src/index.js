import React from 'react';
import ReactDOM from 'react-dom';

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
  }
  
  render() {
    return (
      this.state.errorMessage
      ? ( <div>Error: {this.state.errorMessage}</div> )
      : (
        this.state.lat && this.state.long
        ? ( <div>
              Latitude: {this.state.lat}
              <br/>
              Longitude: {this.state.long}
            </div> 
          )
        : <div>Loading</div>
      )
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);