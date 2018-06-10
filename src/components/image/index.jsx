import React, { Component } from 'react';

const Props = {
  alt: String,
  fallback: String,
  src: String,
};

export class Image extends Component<Props> {
  constructor(props) {
    super(props);
    this.onError = this.onError.bind(this);
    this.state = { src: props.src };
  }

  onError() {
    this.setState({ src: this.props.fallback });
  }

  render() {
    return <img onError={this.onError} src={this.state.src} alt={this.props.alt} />;
  }
}
