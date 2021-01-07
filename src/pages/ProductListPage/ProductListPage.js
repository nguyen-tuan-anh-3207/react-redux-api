import React, { Component } from "react";
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import {connect} from 'react-redux';
import {Link } from 'react-router-dom';

import {actFetchProductsRequest, actDeleteProductRequest} from './../../actions/index';


class ProductListPage extends Component {

  componentDidMount(){
    this.props.fetchAllProducts();
  }

  onDelete =(id) =>{
    // var {products} = this.state;
    // callAPI(`products/${id}`, 'DELETE', null).then(res =>{
    //   if (res.status === 200) {
    //     var index = products.find(product => product.id === id);
    //     if (index !== -1) {
    //       products.splice(index, 1);
    //       this.setState({
    //         products
    //       })
    //     }

    //   }
    // })
    this.props.onDeleteProduct(id);
  }
  render() {
     // var {products} = this.props ;
    var {products} = this.props ;
    
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to = '/product/add' className="btn btn-info mb-10">
          Thêm sản phẩm
        </Link>
        <ProductList>
            {this.showProduct(products)}
        </ProductList>
      </div>
    );
  }
  showProduct = (products)=>{
      var result = null;
      if (products.length >0) {
        result = products.map((product,index)=>{
            return (
                <ProductItem
                    key = {index}
                    product = {product}
                    index = {index}
                    onDelete = {this.onDelete}
                />
            )
        })
      }
      return result;
  }
}

 const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct : (id) =>{
      dispatch(actDeleteProductRequest(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);
