import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          <Link
            to = {`product/${product.id}/edit`}
            className="btn btn-success mr-5">
            Sửa
          </Link>
          <button type="button" className="btn btn-danger" onClick = {()=> this.onDelete(product.id)}>
            Xóa
          </button>
        </td>
      </tr>
    );
  }

  onDelete =(id)=>{
    if(confirm('Bạn chắc chắn muốn xóa không?')){ //eslint-disable-line
      this.props.onDelete(id);
    }
  }
}

export default ProductItem;
