import axios from 'axios';

// export function getProduct() {
//
//   return axios({
//     method: 'get',
//     url: 'https://my-json-server.typicode.com/josesteva/apw-data/product'
//   });
//
// }

export const getProduct = async () => {

  const result = await axios(
    'https://my-json-server.typicode.com/josesteva/apw-data/product',
  );

  return result.data;

};
