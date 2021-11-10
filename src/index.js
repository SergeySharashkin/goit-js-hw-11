import './sass/main.scss';
import getElements from './js/api_function';
const refs = {
  container: document.querySelector('#content_container'),
  form: document.querySelector('#search-form'),
  btn: document.querySelector('button'),
  input: document.querySelector('input'),
};
let inputValue = '';

refs.input.addEventListener('input', inputSaver);
function inputSaver() {
    inputValue = refs.input.value
  return inputValue;
}
refs.btn.addEventListener('submit', onSubmitForm);
function onSubmitForm(event) {
  event.preventDefault();
  console.log(inputValue);
  return renderItems(inputValue);
  
}
async function renderItems(inputValue) {
  try {
    const item = await getElements({});
    console.log(item);
  } catch (error) {
    console.log(error);
  }
}
renderItems();
