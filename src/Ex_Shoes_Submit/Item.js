import React, { Component } from "react";
import { ADD_SHOES, VIEW_SHOES } from "./redux/constant/shoes";
import { connect } from "react-redux";

class Item extends Component {
  render() {
    const { shoes, handleView, handleAdd } = this.props;
    return (
      <div className="col-4">
        <div className="card d-flex flex-column justify-content-center align-items-center">
          <img src={shoes.image} alt="" style={{ width: 100 }} />
          <div>
            <button
              className="btn btn-danger me-2"
              onClick={() => {
                handleAdd(shoes);
              }}
            >
              Add
            </button>
            <button
              className="btn btn-success"
              onClick={() => {
                handleView(shoes);
              }}
            >
              View
            </button>
          </div>
        </div>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleView: (shoes) => {
      let action = {
        type: VIEW_SHOES,
        payload: shoes,
      };
      dispatch(action);
    },
    handleAdd: (shoes) => {
      let action = {
        type: ADD_SHOES,
        payload: shoes,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(Item);
