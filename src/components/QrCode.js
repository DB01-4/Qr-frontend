import React from "react";
import QRCode from "qrcode.react";

export default class Qrcode extends React.Component {
  state = {
    base: "https://24eat-lime.vercel.app/?key=",
  };

  render() {
    console.log(this.props);
    const full = this.state.base + this.props.token;
    if (typeof this.props.token === "undefined") {
      return <div>token was undefined</div>;
    } else {
      return (
        <div>
          <QRCode
            value={full}
            size={130}
            level={"H"}
            includeMargin={true}
            renderAs={"canvas"}
          />
        </div>
      );
    }
  }
}
