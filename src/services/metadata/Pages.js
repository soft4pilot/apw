import axios from 'axios';

export function getPages() {

  return axios({
    method: 'get',
    url: 'https://my-json-server.typicode.com/josesteva/apw-data/pages'
  });

}
