import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const wordForRyan = '';

const textRyan = () => {
  clearDom();
  const domString = `
  <form>
  <button type="submit" class="btn btn-primary" href="sms:+16158368906?&body=${wordForRyan}">Send Word To Ryan</href=></button>
</form>
  `;

  renderToDOM('#form-container', domString);
};

export default textRyan;
