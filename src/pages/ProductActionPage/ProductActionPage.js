import React, { Component } from "react";
import callAPI from "../../utils/apiCaller";
import { Link } from "react-router-dom";
import {actAddProductRequest} from './../../actions/index';
import {connect} from 'react-redux';

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: "",
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      callAPI(`products/${id}`, "GET", null).then((res) => {
        console.log(res);
        var data = res.data;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          chkbStatus: data.status,
        });
      });
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSave = (e) => {
    var { id, txtName, txtPrice, chkbStatus } = this.state;
    var { history } = this.props;
    e.preventDefault();
    if (id) {
      //updating , http : put
      callAPI(`products/${id}`, "PUT", {
        name: txtName,
        price: txtPrice,
        status: chkbStatus,
      }).then(res =>{ history.goBack()});
    } else {
      this.props.onAddProduct({
        name: txtName,
        price: txtPrice,
        status: chkbStatus,
      });
      history.goBack();
    }
  };

  render() {
    var { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Tên sản phẩm: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Input field"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Giá: </label>
            <input
              type="number"
              className="form-control"
              placeholder="Input field"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Trạng thái: </label>
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="chkbStatus"
                value={chkbStatus}
                onChange={this.onChange}
                checked={chkbStatus}
              />
              Còn hàng
            </label>
          </div>

          <button type="submit" className="btn btn-primary mr-5">
            Lưu lại
          </button>
          <Link to="/product-list" className="btn btn-danger">
            Hủy bỏ
          </Link>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product))
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductActionPage);
