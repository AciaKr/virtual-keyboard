/* eslint-disable linebreak-style */
import symbols from './symbols.js';
import keyboard from './key.js';

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

const switchCaps = () => {
  const button = document.querySelectorAll('.caps');
  for (let i = 0; i < button.length; i++) {
    let parent = button[i].closest('.button');
    if (parent.className.includes('Key')) {
      button[i].classList.toggle('hidden');
      button[i].nextSibling.classList.toggle('hidden');
    }
  }
}

const switchShift = () => {
  const button = document.querySelectorAll('.caps');
  for (let i = 0; i < button.length; i++) {
      button[i].classList.toggle('hidden');
      button[i].nextSibling.classList.toggle('hidden');
  }
}

let onPressCapsLock = false;

const pressButtonOnKeyboard = () => {
  document.addEventListener('keydown', function(event) {
    console.log(event);
    document.querySelector(`.${event.code}`).classList.toggle('active');
        if(event.code === 'CapsLock') {
          switchCaps();
          onPressCapsLock = onPressCapsLock ? false : true;
        }

        if(event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
          switchShift();
        }

    addTextInTextarea(event);
  },
  false,
  )

  document.body.addEventListener('keyup' , function(event){
        if(event.code !== 'CapsLock') {
          document.querySelector(`.${event.code}`).classList.toggle('active');
        }

        if(event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
          switchShift();
        }
  })
}

const textarea = document.querySelector('.textarea');
const addTextInTextarea = (event) => {
  if (keyboard[event.code].dictionary) {
    const register = event.shiftKey ? 1 : 0;
    textarea.value += keyboard[event.code].dictionary.EN[register];
  }
}

pressButtonOnKeyboard();

document.addEventListener('click', (event) => {
  if (event.target.closest(`.button`)) {
    const code = event.target.closest(`.button`).classList[1];
    console.log(onPressCapsLock);

    if (code == 'CapsLock') {
      onPressCapsLock = onPressCapsLock ? false : true;
      document.querySelector(`.CapsLock`).classList.toggle('active');
      switchCaps();
    }
    if (keyboard[code] && keyboard[code].dictionary) {
      const register = onPressCapsLock ? 1 : 0;
      textarea.value += keyboard[code].dictionary.EN[register];
    }
    if (keyboard[code] && keyboard[code].activity) {
      textarea.value = keyboard[code].activity(textarea.value, textarea.selectionStart);
    }
  }
}, false);
