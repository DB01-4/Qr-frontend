import React from "react";
import Qrcode from "./Qrcode";
import StartButton from "./StartButton";
import Button from "@mui/material/Button";
import Create from "./Create";

const queryParams = new URLSearchParams(window.location.search);

export default class FetchQrLink extends React.Component {
  state = {
    loading: true,
    table: null,
    url: "http://localhost:3000/",
    key: queryParams.get("key"),
    pressed: false,
  };

  async componentDidMount() {
    const url = "http://localhost:8083/api/qr/" + this.state.key;
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
    let btn_class =
      this.state.pressed || !!!this.state.key ? "hidden" : "visible";
    return (
      <div>
        {!this.state.pressed ? (
          <div className={btn_class}>
            <Button
              variant="contained"
              onClick={() => {
                this.setState({ pressed: true });
              }}
            >
              Start
            </Button>
          </div>
        ) : (
          <div>
            {this.state.loading || !this.state.table ? (
              <div>
                <h3>No table was found. Please call your server for help</h3>
                <Create visible={true} />
              </div>
            ) : (
              <div>
                <h2>Scan QR code for the menu.</h2>
                <div>
                  <Qrcode token={this.state.table.link} />
                </div>
                <div>{this.state.table.link}</div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
