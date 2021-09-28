import React, { Component } from "react";
import Button from "@mui/material/Button";

export default class StartButton extends Component {
  sayHello() {
    alert("Hello!");
  }

  render() {
    return (
      <div>
        <Button variant="contained" onClick={this.sayHello}>
          Start
        </Button>
      </div>
    );
  }
}
