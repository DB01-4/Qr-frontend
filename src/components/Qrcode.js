import React from "react";
import QRCode from "qrcode.react";

export default class Qrcode extends React.Component {
  state = {
    base: "http://localhost:3000/table/?key=",
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
            size={128}
            bgColor={"#ffffff"}
            fgColor={"#0008ff"}
            level={"H"}
            includeMargin={true}
            renderAs={"canvas"}
            imageSettings={{
              src: "https://www.lovemysalad.com/sites/default/files/styles/image_530x397/public/banaan-large.jpg?itok=dZxH6D_w",
              x: null,
              y: null,
              height: 30,
              width: 30,
              excavate: true,
            }}
          />
        </div>
      );
    }
  }
}
