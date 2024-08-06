export const morseCodeMap: { [key: string]: string } = {
    // Morse code mappings as defined earlier
    'A': '.-',    'B': '-...',  'C': '-.-.', 'D': '-..',   'E': '.',    'F': '..-.',
    'G': '--.',   'H': '....',  'I': '..',   'J': '.---',  'K': '-.-',  'L': '.-..',
    'M': '--',    'N': '-.',    'O': '---',  'P': '.--.',  'Q': '--.-', 'R': '.-.',
    'S': '...',   'T': '-',     'U': '..-',  'V': '...-',  'W': '.--',  'X': '-..-',
    'Y': '-.--',  'Z': '--..',  '1': '.----','2': '..---','3': '...--','4': '....-',
    '5': '.....','6': '-....','7': '--...','8': '---..','9': '----.','0': '-----',
    ' ': '/'
  };
  
  export const textMap: { [key: string]: string } = Object.fromEntries(
    Object.entries(morseCodeMap).map(([key, value]) => [value, key])
  );
  
  export const encodeToMorse = (text: string): string => {
    return text.toUpperCase().split('').map(char => morseCodeMap[char] || '').join(' ');
  };
  
  export const decodeFromMorse = (morse: string): string => {
    return morse.split(' ').map(code => textMap[code] || '').join('');
  };
  