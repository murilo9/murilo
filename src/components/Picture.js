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

  getSquareStyle() {
    return {
      border: `2px solid ${this.props.color === 'blue' ? '#5DEEFF' : '#66E782'}`,
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: this.props.left || '0',
      right: this.props.right || '0',
      top: this.props.top || '0',
      bottom: this.props.bottom || '0',
    };
  }

  getImgStyle() {
    return {
      backgroundImage: `url(${this.props.src})`,
      backgroundSize: 'cover',
      width: '100%',
      paddingTop: '100%',
      position: 'relative',
    };
  }

  render() {
    return (
      <div style={this.getContainterStyle()}
        className={'mh-picture ' + (this.props.className || '')}>
        <div style={this.getSquareStyle()}></div>
        <div style={this.getImgStyle()} ></div>
      </div>
    );
  }
}

export default Picture;
