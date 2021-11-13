// import { GiphyFetch } from '@giphy/js-fetch-api';
const axios = require('axios');
const MANE_URL = 'https://pixabay.com/api/';
const MY_KEY = '24256402-655c9b75f9739418750c25629';
const FILTERS = '&image_type=photo&orientation=horizontal&safesearch=true';
// const gf = new GiphyFetch(MY_KEY);

export default async function getElements(name, page) {
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(name),
  // };
  const item = await axios
    .get(`${MANE_URL}?key=${MY_KEY}&q=${name}${FILTERS}&page=${page}&per_page=40`)
    .then(function (response) {
      console.log(response)
      return response
      // .json();
    });
  // const item = await response.json();

  return item;
}
