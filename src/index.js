const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    return expr.split('**********').map((word) => {
        let result = []

        for (let i = 0; i < word.length; i = i + 10) {
            let letters = []
            let letter = word.slice(i, i + 10);
            
            for (let i = 0; i < letter.length; i = i + 2) {        
                switch (letter.slice(i, i + 2)) {
                    case '10':
                        letters.push('.')
                        break

                    case '11':
                        letters.push('-')
                        break
                }
            }

            result.push(MORSE_TABLE[letters.join('')])
        }
        
        return result.join('')      
    }).join(' ')
}

module.exports = {
    decode
}