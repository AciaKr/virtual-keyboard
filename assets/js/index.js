/* eslint-disable linebreak-style */
import symbols from './symbols.js';

class Key {
  constructor(classes, { code, en, ru }) {
    this.classes = classes;
    this.button = '';
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
    const button = document.createElement('div');
    button.classList.add('button', this.code);

    content += '<span class="en">';
    content += `<span class="caps">${this.en[0]}</span>`;

    if (this.en[1]) {
      content += `<span class="shiftCaps hidden">${this.en[1]}</span>`;
    }

    content += '</span>';

    button.innerHTML = content;
    return button;
  }
}

const createKeyboard = () => {
  symbols.forEach((button) => {
    const key = new Key('key', button);
    key.buildKeyboard();
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
  description.innerHTML = 'Клавиатура создана в операционной системе Windows<br>Для переключения языка комбинация: левыe ctrl + alt';

  main.append(title);
  main.append(textarea);
  main.append(keyboard);
  main.append(description);

  const virtualKeyboard = document.querySelector('.body');
  virtualKeyboard.append(main);

  createKeyboard();
};

buildDOM();
