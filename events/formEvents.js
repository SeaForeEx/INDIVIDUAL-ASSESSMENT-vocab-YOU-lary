import { createWord, getWords, updateWord } from '../api/wordData';
import { showWords } from '../pages/words';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-word')) {
      // console.warn('CLICKED SUBMIT BOOK', e.target.id);
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        uid: user.uid,
        dateSub: `${Date.now()}`,
      };

      createWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateWord(patchPayload).then(() => {
          getWords(user.uid).then(showWords);
        });
      });
    }

    // CLICK EVENT FOR EDITING A WORD
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      // console.warn('CLICKED UPDATE BOOK', e.target.id);
      // console.warn(firebaseKey);
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language: document.querySelector('#language').value,
        firebaseKey,
        dateSub: `${Date.now()}`,
      };
      updateWord(payload).then(() => {
        getWords(user.uid).then(showWords);
      });
    }
  });
};

export default formEvents;
