const VALID_BLACK_KEYS = ['w', 'e', 't', 'y', 'u'];
const VALID_WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k'];
const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];

const NOTES = [
    'C4', 'CC4', 'D4', 'DD4',
    'E4', 'F4', 'FF4', 'G4',
    'GG4', 'A4', 'AA4', 'B4', 'C5'
];

const KEY_TO_NOTE = {
    a:  'C4',
    w: 'CC4',
    s:  'D4',
    e: 'DD4',
    d:  'E4',
    f:  'F4',
    t: 'FF4',
    g:  'G4',
    y: 'GG4',
    h:  'A4',
    u: 'AA4',
    j:  'B4',
    k:  'C5',
};

const NOTE_TO_KEY = {
    'C4'   : 'a',
    'CC4'  : 'w',
    'D4'   : 's',
    'DD4'  : 'e',
    'E4'   : 'd',
    'F4'   : 'f',
    'FF4'  : 't',
    'G4'   : 'g',
    'GG4'  : 'y',
    'A4'   : 'h',
    'AA4'  : 'u',
    'B4'   : 'j',
    'C5'   : 'k',
}

export { NOTES };
export { KEY_TO_NOTE };
export { NOTE_TO_KEY };
export { VALID_KEYS };
export { VALID_WHITE_KEYS };
export { VALID_BLACK_KEYS };