import axios from 'axios';

export function getContact() {

  return axios({
    method: 'get',
    url: 'https://my-json-server.typicode.com/josesteva/apw-data/contact'
  });

}
