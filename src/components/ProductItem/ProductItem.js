import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    var {index, product} = this.props;
    var statusName = product.status ? 'Còn hàng' : 'Hết hàng';
    var statusClass = product.status ? 'warning' : 'default';
    return (
      <tr>
        <td>{index+1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>
          {statusName}
          </span>
        </td>
        <td>
          <button type="button" className="btn btn-success mr-5">
            Sửa
          </button>
          <button type="button" className="btn btn-danger">
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
