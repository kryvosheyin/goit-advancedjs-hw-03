import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common['x-api-key'] =
  'live_IkTNNDEEFztCZXmmf7CnL0I4gvGXL6SaBwJ1LTvmSFQVrnXatzLon3CvBCLPLMA';

export function fetchBreeds() {
  return axios
    .get('breeds')
    .then(resp => resp.data)
    .catch(err => {
      console.log(err);
      throw err;
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`/images/${breedId}`)
    .then(resp => resp)
    .catch(err => console.log(err));
}
