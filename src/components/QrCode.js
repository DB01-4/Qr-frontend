import React from "react";
import QRCode from "qrcode-react";

export default class Qrcode extends React.Component {
  state = {
    base: "http://localhost:3000/table/?key=",
  };

  render() {
    console.log(this.props);
    const full = this.state.base + this.props.token;
    return (
      <div>
        <h1>{this.props.token}</h1>
        <QRCode value={full} />
      </div>
    );
  }
}
