import * as Types from './../constants/ActionTypes';
import callAPI from './../utils/apiCaller';
//  get data in server
export const actFetchProducts = (products) =>{
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actFetchProductsRequest = ()=>{
    return (dispatch) =>{
        return callAPI('products', 'GET', null)
            .then(res =>{dispatch(actFetchProducts(res.data))});
    }
}
//edit 
export const actDeleteProduct = (id) =>{
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actDeleteProductRequest = (id) =>{
    return dispatch =>{
        return callAPI(`products/${id}`, 'DELETE', null)
        .then(res =>
            dispatch(actDeleteProduct(id)));
    }
}
//add 
export const actAddProduct = (product) =>{
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actAddProductRequest = (product) =>{
    return dispatch =>{
        return callAPI('products', 'POST', product)
        .then(res =>    dispatch(actAddProduct(res.data)));
    }
}