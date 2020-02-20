module.exports = function toReadable (number) {
    const firstDecade = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
    ];

    const secondDecade = [
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];

    const allDecades = [
        'zero',
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];

    const numXXX = Math.floor(number / 100) * 100;
    const numXX = Math.floor((number - numXXX) / 10) * 10;
    const numX = number - numXXX - numXX;

    let hundreds = '';
    let decades = '';
    let units = '';

    if (numXXX) {
        const index = numXXX / 100;
        hundreds = `${firstDecade[index]} hundred`;

        if (number % 100 !== 0) {
            hundreds = `${firstDecade[index]} hundred `;
        }
    }

    if (numXX >= 20) {
        const index = numXX / 10;
        decades = `${allDecades[index]}`;
        
        if (number % 10 !== 0) {
            decades = `${allDecades[index]} `;
        }
    } else if (numXX === 10) {
        const index = number - numXXX - 10;
        decades = `${secondDecade[index]}`;
    }

    if ((number < 10)
        || ((numXX >= 20) && (numX))
        || ((numXXX) && (!numXX) && (numX))) {
        units = `${firstDecade[numX]}`;
    }

    return `${hundreds}${decades}${units}`;
}
