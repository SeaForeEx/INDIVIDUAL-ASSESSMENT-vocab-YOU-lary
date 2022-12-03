import navBar from '../components/shared/navBar';
import navEvents from '../events/navEvents';
import domBuilder from '../components/shared/domBuilder';
import logoutButton from '../components/logoutButton';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import { getWords } from '../api/wordData';
import { showWords } from '../pages/words';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  navEvents(user);

  getWords(user.uid).then((words) => showWords(words));
  // console.warn(user.uid);
};

export default startApp;
