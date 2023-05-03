/* eslint-disable linebreak-style */
const keyboard = {
  Backquote: {
    dictionary: {
      EN: '`~',
      RU: 'ёЁ',
    },
  },
  Digit1: {
    dictionary: {
      EN: '1!',
      RU: '1!',
    },
  },
  Digit2: {
    dictionary: {
      EN: '2@',
      RU: '2"',
    },
  },
  Digit3: {
    dictionary: {
      EN: '3#',
      RU: '3№',
    },
  },
  Digit4: {
    dictionary: {
      EN: '4$',
      RU: '4;',
    },
  },
  Digit5: {
    dictionary: {
      EN: '5%',
      RU: '5%',
    },
  },
  Digit6: {
    dictionary: {
      EN: '6^',
      RU: '6:',
    },
  },
  Digit7: {
    dictionary: {
      EN: '7&',
      RU: '7?',
    },
  },
  Digit8: {
    dictionary: {
      EN: '8*',
      RU: '8*',
    },
  },
  Digit9: {
    dictionary: {
      EN: '9(',
      RU: '9(',
    },
  },
  Digit0: {
    dictionary: {
      EN: '0)',
      RU: '0)',
    },
  },
  Minus: {
    dictionary: {
      EN: '-_',
      RU: '-_',
    },
  },
  Equal: {
    dictionary: {
      EN: '=+',
      RU: '=+',
    },
  },
  Backspace: {
    name: '&larr;',
    activity: (value, curretPos) => value.slice(0, curretPos - 1) + value.slice(curretPos),
  },
  Tab: {
    name: 'Tab',
    activity: (value, curretPos) => `${value.slice(0, curretPos)}\t${value.slice(curretPos)}`,
  },
  KeyQ: {
    dictionary: {
      EN: 'qQ',
      RU: 'йЙ',
    },
  },
  KeyW: {
    dictionary: {
      EN: 'wW',
      RU: 'цЦ',
    },
  },
  KeyE: {
    dictionary: {
      EN: 'eE',
      RU: 'уУ',
    },
  },
  KeyR: {
    dictionary: {
      EN: 'rR',
      RU: 'кК',
    },
  },
  KeyT: {
    dictionary: {
      EN: 'tT',
      RU: 'еЕ',
    },
  },
  KeyY: {
    dictionary: {
      EN: 'yY',
      RU: 'нН',
    },
  },
  KeyU: {
    dictionary: {
      EN: 'uU',
      RU: 'гГ',
    },
  },
  KeyI: {
    dictionary: {
      EN: 'iI',
      RU: 'шШ',
    },
  },
  KeyO: {
    dictionary: {
      EN: 'oO',
      RU: 'щЩ',
    },
  },
  KeyP: {
    dictionary: {
      EN: 'pP',
      RU: 'зЗ',
    },
  },
  BracketLeft: {
    dictionary: {
      EN: '[{',
      RU: 'хХ',
    },
  },
  BracketRight: {
    dictionary: {
      EN: ']}',
      RU: 'ъЪ',
    },
  },
  Delete: {
    name: 'DEL',
    activity: (value, cur) => (cur ? value.slice(0, cur) + value.slice(cur + 1) : value),
  },
  CapsLock: {
    name: 'CapsLock',
  },
  KeyA: {
    dictionary: {
      EN: 'aA',
      RU: 'фФ',
    },
  },
  KeyS: {
    dictionary: {
      EN: 'sS',
      RU: 'ыЫ',
    },
  },
  KeyD: {
    dictionary: {
      EN: 'dD',
      RU: 'вВ',
    },
  },
  KeyF: {
    dictionary: {
      EN: 'fF',
      RU: 'аА',
    },
  },
  KeyG: {
    dictionary: {
      EN: 'gG',
      RU: 'пП',
    },
  },
  KeyH: {
    dictionary: {
      EN: 'hH',
      RU: 'рР',
    },
  },
  KeyJ: {
    dictionary: {
      EN: 'jJ',
      RU: 'оО',
    },
  },
  KeyK: {
    dictionary: {
      EN: 'kK',
      RU: 'лЛ',
    },
  },
  KeyL: {
    dictionary: {
      EN: 'lL',
      RU: 'дД',
    },
  },
  Semicolon: {
    dictionary: {
      EN: ';:',
      RU: 'жЖ',
    },
  },
  Quote: {
    dictionary: {
      EN: '\'"',
      RU: 'эЭ',
    },
  },
  Enter: {
    name: '&crarr;',
    activity: (value, curretPos) => `${value.slice(0, curretPos)}\r\n${value.slice(curretPos + 1)}`,
  },
  Backslash: {
    dictionary: {
      EN: '\\|',
      RU: '\\/',
    },
  },
  ShiftLeft: {
    name: '&uarr;',
    activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
  },
  IntlBackslash: {
    dictionary: {
      EN: '\\|',
      RU: '\\/',
    },
  },
  KeyZ: {
    dictionary: {
      EN: 'zZ',
      RU: 'яЯ',
    },
  },
  KeyX: {
    dictionary: {
      EN: 'xX',
      RU: 'чЧ',
    },
  },
  KeyC: {
    dictionary: {
      EN: 'cC',
      RU: 'сС',
    },
  },
  KeyV: {
    dictionary: {
      EN: 'vV',
      RU: 'мМ',
    },
  },
  KeyB: {
    dictionary: {
      EN: 'bB',
      RU: 'иИ',
    },
  },
  KeyN: {
    dictionary: {
      EN: 'nN',
      RU: 'тТ',
    },
  },
  KeyM: {
    dictionary: {
      EN: 'mM',
      RU: 'ьЬ',
    },
  },
  Comma: {
    dictionary: {
      EN: ',<',
      RU: 'бБ',
    },
  },
  Period: {
    dictionary: {
      EN: '.>',
      RU: 'юЮ',
    },
  },
  Slash: {
    dictionary: {
      EN: '/?',
      RU: '.,',
    },
  },
  ShiftRight: {
    name: '&uarr;',
    // activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
  },
  ArrowUp: {
    name: '&and;',
    activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
  },
  ControlLeft: {
    name: 'Ctrl',
    activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
  },
  MetaLeft: {
    name: 'Win',
  },
  AltLeft: {
    name: 'Alt',
    activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
  },
  Space: {
    name: 'Space',
    activity: (value, curretPos) => `${value.slice(0, curretPos)} ${value.slice(curretPos + 1)}`,
  },
  AltRight: {
    name: 'Alt',
    activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
  },
  ControlRight: {
    name: 'Ctrl',
    activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
  },
  ArrowLeft: {
    name: '<',
    activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
  },
  ArrowDown: {
    name: '&or;',
    activity: (value, curretPos) => `${value.slice(0, curretPos)}&or;${value.slice(curretPos + 1)}`,
  },
  ArrowRight: {
    name: '>',
    activity: (value, curretPos) => value.slice(0, curretPos) + value.slice(curretPos + 1),
  },
};

export default keyboard;
