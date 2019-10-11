import React, { Component } from 'react';
import axios from 'axios';

class Image extends Component {
  state = { source: null };

  componentDidMount() {
    axios
      .get(
        'http://localhost:8000/images/books.png',
        { responseType: 'arraybuffer' },
      )
      .then(response => {
          console.log(response.data)
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        );
        this.setState({ source: "data:;base64," + base64 });
      });
  }

  render() {
    return <img src={this.state.source} />;
  }
}

export default Image;