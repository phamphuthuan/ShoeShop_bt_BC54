import React, { Component } from "react";
import Cart from "./Cart";
import List_Shoes from "./List_Shoes";
import Detail from "./Detail";

export default class Ex_Shoes extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <Cart />
          </div>
          <div className="col-6">
            <List_Shoes />
          </div>
        </div>
        <Detail />
      </div>
    );
  }
}
