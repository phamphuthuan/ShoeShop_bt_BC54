import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./Item";

class List_Shoes extends Component {
  render() {
    const { shoesArr } = this.props;

    return (
      <div className="row">
        {shoesArr?.map((item, index) => {
          return <Item shoes={item} key={index} />;
        })}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    shoesArr: state.shoesReducer.shoesArr,
  };
};
export default connect(mapStateToProps)(List_Shoes);
