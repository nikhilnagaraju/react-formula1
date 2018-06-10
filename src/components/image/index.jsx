import React, { Component } from 'react';

const Props = {
  alt: String,
  fallback: String,
  src: String,
  error: Boolean,
};

export class Image extends Component<Props> {
  constructor(props) {
    super(props);
    this.onError = this.onError.bind(this);
    this.state = { src: props.src };
  }

  // noinspection JSUnusedGlobalSymbols
  static getDerivedStateFromProps(props, state) {
    if (props.src !== state.src) {
      return { src: props.src };
    }
    return null;
  }

  onError() {
    this.setState({ error: true });
  }

  render() {
    return (
      <img
        onError={this.onError}
        src={this.state.error ? this.props.fallback : this.state.src}
        alt={this.props.alt}
      />
    );
  }
}
