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