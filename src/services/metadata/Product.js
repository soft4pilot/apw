import axios from 'axios';

export function getProduct() {

  return axios({
    method: 'get',
    url: 'https://my-json-server.typicode.com/josesteva/apw-data/product'
  });

}
