import React from "react";
import Qrcode from "./Qrcode";

export default class FetchQrLink extends React.Component {
  state = {
    loading: true,
    table: null,
  };

  async componentDidMount() {
    const url = "http://localhost:8080/api/qr/1";
    const response = await fetch(url, {
      method: "get",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    });
    const data = await response.json();
    this.setState({ table: data, loading: false });
    console.log(data);
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.table ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>
              <Qrcode token={this.state.table.link} />
            </div>
            <div>{this.state.table.link}</div>
          </div>
        )}
      </div>
    );
  }
}
