/* eslint-disable max-len */
import * as React from 'react';

class Picture extends React.Component {
  getStyle() {
    return {
      backgroundImage: `url(${this.props.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: this.props.size,
      paddingTop: this.props.size,
    };
  }

  render() {
    return (
      <div className="mh-picture" style={this.getStyle()} className={this.props.className}>
      </div>
    );
  }
}

export default Picture;
