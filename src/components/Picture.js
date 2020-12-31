/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import * as React from 'react';

class Picture extends React.Component {
  getContainterStyle() {
    return {
      width: this.props.size,
      height: this.props.size,
      position: 'relative',
    };
  }

  getSize() {
    return window.innerWidth > 768 ? '260px' : '200px';
  }

  getSquareStyle() {
    return {
      border: `2px solid ${this.props.color === 'blue' ? '#5DEEFF' : '#66E782'}`,
      width: this.getSize(),
      height: this.getSize(),
      position: 'absolute',
      left: this.props.left || '0',
      right: this.props.right || '0',
      top: this.props.top || '0',
      bottom: this.props.bottom || '0',
    };
  }

  getImgStyle() {
    return {
      objectFit: 'cover',
      width: this.getSize(),
      height: this.getSize(),
      position: 'relative',
    };
  }

  render() {
    return (
      <div style={this.getContainterStyle()}
        className={'mh-picture ' + (this.props.className || '')}>
        <div style={this.getSquareStyle()}></div>
        <img style={this.getImgStyle()} src={this.props.src} />
      </div>
    );
  }
}

export default Picture;
