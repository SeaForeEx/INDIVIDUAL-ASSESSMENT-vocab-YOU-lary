import { deleteWord, getWords, getSingleWord } from '../api/wordData';
import addWordForm from '../components/addWordForm';
import { showWords } from '../pages/words';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING FORM FOR CREATING A WORD
    if (e.target.id.includes('add-word-btn')) {
      // console.warn('ADD BOOK');
      addWordForm(user.uid);
    }

    // CLICK EVENT EDITING/UPDATING A WORD
    if (e.target.id.includes('edit-word-btn')) {
      // console.warn('EDIT BOOK', e.target.id);
      // console.warn(e.target.id.split('--'));
      const [, firebaseKey] = e.target.id.split('--');

      getSingleWord(firebaseKey).then((wordObj) => addWordForm(user.uid, wordObj));
    }

    // CLICK EVENT FOR DELETING A WORD
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        // console.warn('CLICKED DELETE BOOK', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteWord(firebaseKey).then(() => {
          getWords(user.uid).then(showWords); // we call itinside of delete book cause it needs to go in sequence
        });
      }
    }
  });
};

export default domEvents;
