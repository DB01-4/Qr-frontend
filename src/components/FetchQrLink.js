import React from "react";
import Qrcode from "./Qrcode";
import StartButton from "./StartButton";

const queryParams = new URLSearchParams(window.location.search);

export default class FetchQrLink extends React.Component {
  state = {
    loading: true,
    table: null,
    url: "http://localhost:3000/",
    key: queryParams.get("key"),
  };

  async componentDidMount() {
    const url = "http://localhost:8080/api/qr/" + this.state.key;
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
        <StartButton />
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
