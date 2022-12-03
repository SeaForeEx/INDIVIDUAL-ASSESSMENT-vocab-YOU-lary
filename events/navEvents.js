import { signOut } from '../utils/auth';
import {
  getWords, jsWords, htmlWords, cssWords
} from '../api/wordData';
import { showWords } from '../pages/words';

// navigation events
const navEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // JAVASCRIPT WORDS
  document.querySelector('#js-words').addEventListener('click', () => {
    // console.warn('CLICKED SALE BOOKS');
    jsWords(user.uid).then(showWords);
  });

  // HTML WORDS
  document.querySelector('#html-words').addEventListener('click', () => {
    // console.warn('CLICKED SALE BOOKS');
    htmlWords(user.uid).then(showWords);
  });

  // CSS WORDS
  document.querySelector('#css-words').addEventListener('click', () => {
    // console.warn('CLICKED SALE BOOKS');
    cssWords(user.uid).then(showWords);
  });

  // ALL WORDS
  document.querySelector('#all-words').addEventListener('click', () => {
    getWords(user.uid).then(showWords);
  });
};

export default navEvents;
