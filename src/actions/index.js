import * as Types from './../constants/ActionTypes';
import callAPI from './../utils/apiCaller';

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