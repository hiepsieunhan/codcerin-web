import React, { PropTypes, Component } from 'react';
import ReactDom from 'react-dom';

class Modal extends Component {

  static propTypes = {
    content: PropTypes.node.isRequired,
    onClose: PropTypes.func
  };

  componentDidMount() {
    window.addEventListener('mouseup', this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.handleClick);
  }

  render() {
    return (
      <div className="codcerin-modal__container">
        <div className="codcerin-modal__content-wrapper" ref="Content">
          <span onClick={this.handleClose} className="codcerin-modal__close-btn"> x </span>
          {this.props.content}
        </div>
      </div>
    );
  }

  handleClick = (e) => {
    if (!ReactDom.findDOMNode(this.refs.Content).contains(e.target)) {
      this.handleClose();
    }
  }

  handleClose = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }
}

export default Modal;