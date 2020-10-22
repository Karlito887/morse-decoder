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
    ' ': ' '
};

function decode(expr) {
    let arr = []
    for(let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10))
    }

    const dividedArr = arr.map(item => {
        let subArr = []
        for(let i = 0; i < item.length; i += 2) {
            subArr.push(item.slice(i, i + 2))
        }
        return subArr
    })

    const morseArr = dividedArr.map(item => {
        if(item.join('') === '**********') return ' '
        return item.map(elem => {
            if(elem === '10') return '.'
            else if(elem === '11') return '-'
            else return ''
        }).join('')
    })

    return morseArr.map(item => MORSE_TABLE[item]).join('')
}

module.exports = {
    decode
}

