'use strict';

const sec = 3;

const next = () => {
  setInterval(() => {
    try {
      const button = document.querySelector('#btn_next.on');

      if (decodeURI(button.href).includes('마지막페이지')) {
        window.close();
      } else {
        button.click();
      }
    } catch (error) {
      console.log(error);
    }
  }, 1000 * sec);
};

window.addEventListener('load', next);
