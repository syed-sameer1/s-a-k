import React, { Component } from "react";
import Modal from "react-awesome-modal";
import "./ServicesCard.css";

export default class ServicesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <>
        <figure className="ServicesCard">
          <img src={this.props.icon} alt="icon" />
          <h3>{this.props.ServiceName}</h3>
          <figcaption className="ServiceDetail">
            <p>{this.props.ServiceDetail}</p>
            <button onClick={() => this.openModal()}>Read More</button>
          </figcaption>
        </figure>

        <Modal
          visible={this.state.visible}
          width="600"
          height="500"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div className="modal">
            <img src={this.props.icon} alt="icon" />
            <h3>{this.props.ServiceName}</h3>
            <p>{this.props.details}</p>
            <a href="javascript:void(0);" onClick={() => this.closeModal()}>
              Close
            </a>
          </div>
        </Modal>
      </>
    );
  }
}
