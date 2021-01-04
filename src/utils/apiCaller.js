import axios from 'axios';
import * as Config from '../constants/config';

export default function callAPI(endpoint, method = 'GET', body){
    return    axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: null
       }).catch(err => console.log(err));
}