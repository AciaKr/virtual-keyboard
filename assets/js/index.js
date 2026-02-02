import symbols from './symbols.js';
import key from './key.js';

class Key {
  constructor({ code, en, ru }) {
    this.code = code;
    this.en = en;
    this.ru = ru;
  }

  buildKeyboard() {
    const keyboard = document.querySelector('.keyboard');

    if (this.code === 'Backquote' || this.code === 'Tab' || this.code === 'CapsLock' || this.code === 'ShiftLeft' || this.code === 'ControlLeft') {
      const buttonContent = this.createButton();

      const rowButton = document.createElement('div');
      rowButton.classList.add('keyboard__row', 'row');

      rowButton.append(buttonContent);
      keyboard.append(rowButton);
    } else {
      const buttonContent = this.createButton();

      const rows = document.querySelectorAll('.row');
      const lastRow = rows[rows.length - 1];

      lastRow.append(buttonContent);
    }
  }

  createButton() {
    let content = '';
    const button = document.createElement('button');
    button.classList.add('button', this.code);

    content += '<span class="en">';
    content += `<span class="caps">${this.en[0]}</span>`;

    if (this.en[1]) {
      content += `<span class="shiftCaps hidden">${this.en[1]}</span>`;
    } else {
      content += `<span class="shiftCaps hidden">${this.en[0]}</span>`;
    }

    content += '</span>';

    button.innerHTML = content;
    return button;
  }
}

const parseKey = () => {
  symbols.forEach((button) => {
    const symbol = new Key(button);
    symbol.buildKeyboard();
  });
};

const buildDOM = () => {
  const main = document.createElement('main');
  main.classList.add('virtual-keyboard');

  const title = document.createElement('h1');
  title.classList.add('virtual-keyboard__title', 'title');
  title.innerHTML = 'RSS Virtual Keyboard';

  const textarea = document.createElement('textarea');
  textarea.classList.add('virtual-keyboard__textarea', 'textarea');
  textarea.setAttribute('id', 'textarea');

  const keyboard = document.createElement('div');
  keyboard.classList.add('virtual-keyboard__keyboard', 'keyboard');
  keyboard.setAttribute('id', 'keyboard');

  const description = document.createElement('div');
  description.classList.add('description');
  description.innerHTML = 'Клавиатура создана в операционной системе Windows';

  main.append(title);
  main.append(textarea);
  main.append(keyboard);
  main.append(description);

  const virtualKeyboard = document.querySelector('.body');
  virtualKeyboard.append(main);

  parseKey();
};

let onPressCapsLock = false;

const switchCaps = (code) => {
  if (code === 'CapsLock') {
    document.querySelector(`.${code}`).classList.toggle('active');
    onPressCapsLock = !onPressCapsLock;
    const buttons = document.querySelectorAll('.caps');
    for (let i = 0; i < buttons.length; i += 1) {
      const parent = buttons[i].closest('.button');
      if (parent.className.includes('Key')) {
        buttons[i].classList.toggle('hidden');
        buttons[i].nextSibling.classList.toggle('hidden');
      }
    }
  }
};

const switchShift = (code) => {
  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    const buttons = document.querySelectorAll('.caps');
    for (let i = 0; i < buttons.length; i += 1) {
      buttons[i].classList.toggle('hidden');
      buttons[i].nextSibling.classList.toggle('hidden');
    }
  }
};

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  const textarea = document.querySelector('.textarea');
  textarea.focus();
  if (key[event.code]) {
    if (event.code !== 'CapsLock') {
      document.querySelector(`.${event.code}`).classList.toggle('active');
    }

    if (event.ctrlKey && event.code === 'KeyC') {
      return;
    }

    switchCaps(event.code);

    switchShift(event.code);

    if (key[event.code] && key[event.code].activity) {
      textarea.value = key[event.code].activity(textarea.value, textarea.selectionStart);
      textarea.focus();
    }

    if (key[event.code] && key[event.code].dictionary) {
      let register = event.shiftKey ? 1 : 0;
      if (onPressCapsLock && event.code.includes('Key')) {
        register = event.shiftKey ? 0 : 1;
      }
      textarea.setRangeText(key[event.code].dictionary.EN[register], textarea.selectionStart, textarea.selectionEnd, 'end');
      textarea.focus();
    }
  }
});

document.body.addEventListener('keyup', (event) => {
  if (key[event.code]) {
    if (event.code !== 'CapsLock') {
      document.querySelector(`.${event.code}`).classList.toggle('active');
    }
    switchShift(event.code);
  }
});

document.addEventListener('mousedown', (event) => {
  event.preventDefault();
  const textarea = document.querySelector('.textarea');
  textarea.focus();
  if (event.target.closest('.button')) {
    const code = event.target.closest('.button').classList[1];

    if (event.ctrlKey && event.code === 'KeyC') {
      return;
    }

    switchCaps(code);

    switchShift(code);

    if (key[code] && key[code].dictionary) {
      let register = onPressCapsLock ? 1 : 0;
      if (onPressCapsLock && !code.includes('Key')) {
        register = onPressCapsLock ? 0 : 1;
      }
      textarea.setRangeText(key[code].dictionary.EN[register], textarea.selectionStart, textarea.selectionEnd, 'end');
      textarea.focus();
    }

    if (key[code] && key[code].activity) {
      textarea.value = key[code].activity(textarea.value, textarea.selectionStart);
      textarea.focus();
    }
  }
});

document.addEventListener('mouseup', (event) => {
  if (event.target.closest('.button')) {
    const code = event.target.closest('.button').classList[1];
    switchShift(code);
  }
});

window.onload = () => {
  buildDOM();
};
