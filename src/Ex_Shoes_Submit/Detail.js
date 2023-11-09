import React, { Component } from "react";
import { connect } from "react-redux";

class Detail extends Component {
  render() {
    const { detail } = this.props;
    return (
      <div className="container d-flex justify-content-center align-items-center">
        <img src={detail.image} alt="" />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    detail: state.shoesReducer.detail,
  };
};

export default connect(mapStateToProps)(Detail);
