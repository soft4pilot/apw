import axios from 'axios';

export function getSession() {

  return axios({
    method: 'get',
    url: 'https://my-json-server.typicode.com/josesteva/apw-data/session'
  });

}
