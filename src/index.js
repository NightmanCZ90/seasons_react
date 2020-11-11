import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      long: null,
      errorMessage: ''
    }

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
      : ( <div>
            Latitude: {this.state.lat}
            <br/>
            Longitude: {this.state.long}
          </div> 
        )
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);