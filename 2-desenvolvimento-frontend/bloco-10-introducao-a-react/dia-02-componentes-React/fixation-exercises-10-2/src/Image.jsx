import React from 'react';

class Image extends React.Component {
  render() {
    return(
      <p>
        {this.props.src} <br />
        {this.props.alt}
      </p>
    );
  }
}

export default Image;