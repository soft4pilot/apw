import axios from 'axios';

export function getBrand() {

  return axios({
    method: 'get',
    url: 'https://my-json-server.typicode.com/josesteva/apw-data/brand'
  });

}
