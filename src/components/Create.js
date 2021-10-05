import React, { Component } from "react";
import "../App.css";
const queryParams = new URLSearchParams(window.location.search);

export default class Create extends Component {
  constructor() {
    super();

    this.state = {
      visible: true,
      url: "http://localhost:3000/",
      key: queryParams.get("key"),
    };
  }
  changeVisibility() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    let btn_class =
      !!this.state.key && !this.props.visible ? "hidden" : "visible";
    return (
      <div className={btn_class}>
        <form>
          <input type="text" placeholder="Table ID" name="key" />
          <input
            type="submit"
            value="Submit"
            onClick={this.changeVisibility.bind(this)}
          />
        </form>
      </div>
    );
  }
}
