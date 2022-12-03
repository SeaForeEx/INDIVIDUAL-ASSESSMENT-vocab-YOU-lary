const clearDom = () => {
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#dictionary').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

export default clearDom;
