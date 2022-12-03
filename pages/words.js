import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyWords = () => {
  const domString = '<h1>No Words</h1>';
  renderToDOM('#dictionary', domString);
};

const showWords = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-word-btn">Add A Word</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h4 class="card-title">${item.title}</h4>
        <h5 class="card-subtitle mb-2 text-muted">${item.definition}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.language}</h6>
        <hr>
        <div class="btn btn-info" id="edit-word-btn--${item.firebaseKey}"><span><div class="fas fa-edit"></div> Edit</span></div>
        <div class="btn btn-danger" id="delete-word-btn--${item.firebaseKey}"><span><div class ="fas fa-trash-alt"></div> Delete</span></div>
      </div>
    </div>
    `;
  });
  renderToDOM('#dictionary', domString);
};

export { showWords, emptyWords };
