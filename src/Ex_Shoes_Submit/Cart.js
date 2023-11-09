import React, { Component } from "react";
import { connect } from "react-redux";
import { CHANGE_QUANTITY, REMOVE_SHOES } from "./redux/constant/shoes";

class Cart extends Component {
  render() {
    const { cart, handleRemove, handleQuantity } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <img src={item.image} alt="" style={{ width: 80 }} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleQuantity(item.id, -1);
                      }}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        handleQuantity(item.id, 1);
                      }}
                    >
                      +
                    </button>
                  </td>
                  <td>{item.price * item.quantity}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleRemove(item.id);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cart: state.shoesReducer.cart,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleRemove: (id) => {
      let action = {
        type: REMOVE_SHOES,
        payload: id,
      };
      dispatch(action);
    },
    handleQuantity: (id, number) => {
      let action = {
        type: CHANGE_QUANTITY,
        payload: {
          id,
          number,
        },
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
