import { signOut } from '../utils/auth';
import { getWords } from '../api/wordData';
import { showWords } from '../pages/words';

// navigation events
const navEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // // BOOKS ON SALE
  // document.querySelector('#sale-books').addEventListener('click', () => {
  //   // console.warn('CLICKED SALE BOOKS');
  //   booksOnSale(user.uid).then(showBooks);
  // });

  // ALL WORDS
  document.querySelector('#all-words').addEventListener('click', () => {
    getWords(user.uid).then(showWords);
  });
};

export default navEvents;
