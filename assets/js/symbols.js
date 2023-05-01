// eslint-disable-next-line no-unused-vars
const symbols = [
  {
    code: 'Backquote',
    en: ['`', '~'],
    ru: ['ё', 'Ё'],
  },
  {
    code: 'Digit1',
    en: ['1', '!'],
    ru: ['1', '!'],
  },
  {
    code: 'Digit2',
    en: ['2', '@'],
    ru: ['2', '"'],
  },
  {
    code: 'Digit3',
    en: ['3', '#'],
    ru: ['3', '№'],
  },
  {
    code: 'Digit4',
    en: ['4', '$'],
    ru: ['4', ';'],
  },
  {
    code: 'Digit5',
    en: ['5', '%'],
    ru: ['5', '%'],
  },
  {
    code: 'Digit6',
    en: ['6', '^'],
    ru: ['6', ':'],
  },
  {
    code: 'Digit7',
    en: ['7', '&amp;'],
    ru: ['7', '?'],
  },
  {
    code: 'Digit8',
    en: ['8', '*'],
    ru: ['8', '*'],
  },
  {
    code: 'Digit9',
    en: ['9', '('],
    ru: ['9', '('],
  },
  {
    code: 'Digit0',
    en: ['0', ')'],
    ru: ['0', ')'],
  },
  {
    code: 'Minus',
    en: ['-', '_'],
    ru: ['-', '_'],
  },
  {
    code: 'Equal',
    en: ['=', '+'],
    ru: ['=', '+'],
  },
  {
    code: 'Backspace',
    en: ['Backspace'],
    ru: ['Backspace'],
  },
  {
    code: 'Tab',
    en: ['Tab'],
    ru: ['Tab'],
  },
  {
    code: 'KeyQ',
    en: ['q', 'Q'],
    ru: ['й', 'Й'],
  },
  {
    code: 'KeyW',
    en: ['w', 'W'],
    ru: ['ц', 'Ц'],
  },
  {
    code: 'KeyE',
    en: ['e', 'E'],
    ru: ['у', 'У'],
  },
  {
    code: 'KeyR',
    en: ['r', 'R'],
    ru: ['к', 'К'],
  },
  {
    code: 'KeyT',
    en: ['t', 'T'],
    ru: ['е', 'Е'],
  },
  {
    code: 'KeyY',
    en: ['y', 'Y'],
    ru: ['н', 'Н'],
  },
  {
    code: 'KeyU',
    en: ['u', 'U'],
    ru: ['г', 'Г'],
  },
  {
    code: 'KeyI',
    en: ['i', 'I'],
    ru: ['ш', 'Ш'],
  },
  {
    code: 'KeyO',
    en: ['o', 'O'],
    ru: ['щ', 'Щ'],
  },
  {
    code: 'KeyP',
    en: ['p', 'P'],
    ru: ['з', 'З'],
  },
  {
    code: 'BracketLeft',
    en: ['[', '{'],
    ru: ['х', 'Х'],
  },
  {
    code: 'BracketRight',
    en: [']', '}'],
    ru: ['ъ', 'Ъ'],
  },
  {
    code: 'Backslash',
    en: ['\\', '/'],
    ru: ['\\', '|'],
  },
  {
    code: 'Delete',
    en: ['Del'],
    ru: ['Del'],
  },
  {
    code: 'CapsLock',
    en: ['CapsLock'],
    ru: ['CapsLock'],
  },
  {
    code: 'KeyA',
    en: ['a', 'A'],
    ru: ['ф', 'Ф'],
  },
  {
    code: 'KeyS',
    en: ['s', 'S'],
    ru: ['ы', 'Ы'],
  },
  {
    code: 'KeyD',
    en: ['d', 'D'],
    ru: ['в', 'В'],
  },
  {
    code: 'KeyF',
    en: ['f', 'F'],
    ru: ['а', 'А'],
  },
  {
    code: 'KeyG',
    en: ['g', 'G'],
    ru: ['п', 'П'],
  },
  {
    code: 'KeyH',
    en: ['h', 'H'],
    ru: ['р', 'Р'],
  },
  {
    code: 'KeyJ',
    en: ['j', 'J'],
    ru: ['о', 'О'],
  },
  {
    code: 'KeyK',
    en: ['k', 'K'],
    ru: ['л', 'Л'],
  },
  {
    code: 'KeyL',
    en: ['l', 'L'],
    ru: ['д', 'Д'],
  },
  {
    code: 'Semicolon',
    en: [';', ':'],
    ru: ['ж', 'Ж'],
  },
  {
    code: 'Quote',
    en: ['\'', '"'],
    ru: ['э', 'Э'],
  },
  {
    code: 'Enter',
    en: ['Enter'],
    ru: ['Enter'],
  },
  {
    code: 'ShiftLeft',
    en: ['Shift'],
    ru: ['Shift'],
  },
  {
    code: 'KeyZ',
    en: ['z', 'Z'],
    ru: ['я', 'Я'],
  },
  {
    code: 'KeyX',
    en: ['x', 'X'],
    ru: ['ч', 'Ч'],
  },
  {
    code: 'KeyC',
    en: ['c', 'C'],
    ru: ['с', 'С'],
  },
  {
    code: 'KeyV',
    en: ['v', 'V'],
    ru: ['м', 'М'],
  },
  {
    code: 'KeyB',
    en: ['b', 'B'],
    ru: ['и', 'И'],
  },
  {
    code: 'KeyN',
    en: ['n', 'N'],
    ru: ['т', 'Т'],
  },
  {
    code: 'KeyM',
    en: ['m', 'M'],
    ru: ['ь', 'Ь'],
  },
  {
    code: 'Comma',
    en: [',', '<'],
    ru: ['б', 'Б'],
  },
  {
    code: 'Period',
    en: ['.', '>'],
    ru: ['ю', 'Ю'],
  },
  {
    code: 'Slash',
    en: ['/', '?'],
    ru: ['.', ','],
  },
  {
    code: 'ArrowUp',
    en: ['▲'],
    ru: ['▲'],
  },
  {
    code: 'ShiftRight',
    en: ['Shift'],
    ru: ['Shift'],
  },
  {
    code: 'ControlLeft',
    en: ['Ctrl'],
    ru: ['Ctrl'],
  },
  {
    code: 'MetaLeft',
    en: ['Win'],
    ru: ['Win'],
  },
  {
    code: 'AltLeft',
    en: ['Alt'],
    ru: ['Alt'],
  },
  {
    code: 'Space',
    en: [' '],
    ru: [' '],
  },
  {
    code: 'AltRight',
    en: ['Alt'],
    ru: ['Alt'],
  },
  {
    code: 'ArrowLeft',
    en: ['◄'],
    ru: ['◄'],
  },
  {
    code: 'ArrowDown',
    en: ['▼'],
    ru: ['▼'],
  },
  {
    code: 'ArrowRight',
    en: ['►'],
    ru: ['►'],
  },
  {
    code: 'ControlRight',
    en: ['Ctrl'],
    ru: ['Ctrl'],
  },
];

export default symbols;
