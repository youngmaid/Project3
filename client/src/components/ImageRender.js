import React, { Component } from 'react';

class ImageRender extends Component {
  render() {
    let className = this.props.className;
    return (
      <div className={className} >
        <img src={this.props.img}/>
      </div>
    );
  };
}

export default ImageRender;
