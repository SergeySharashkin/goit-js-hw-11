// import { GiphyFetch } from '@giphy/js-fetch-api';
const MANE_URL = 'https://pixabay.com/api/';
const MY_KEY = '24256402-655c9b75f9739418750c25629';
const FILTERS = '&image_type=photo&orientation=horizontal&safesearch=true'
// const gf = new GiphyFetch(MY_KEY);

export default async function getElements(name) {
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(name),
  // };
  const response = await fetch(`${MANE_URL}?key=${MY_KEY}&q=${name}${FILTERS}`);
  const item = await response.json();
  
  return item
}
