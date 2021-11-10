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
refs.form.addEventListener('submit', onSubmitForm);
function onSubmitForm(event) {
  event.preventDefault();
  console.log(inputValue);
  return renderItems(inputValue);
  
}
async function renderItems() {
  try {
    const item = await getElements(inputValue);
    if (item.hits.length>0) {console.log(item)
    return};
    alert('такого нет')
    
  } catch (error) {
    console.log(error);
  }
}
// renderItems();
