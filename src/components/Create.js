import React, { Component } from "react";

export default class Create extends Component {
  render() {
    return (
      <div
        style={{
          padding: 30,
        }}
      >
        <form>
          <input type="text" placeholder="Table ID" name="key" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
