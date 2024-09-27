// 1 task
function countLetter(letter, row) {
    let count = 0;
    for (let i = 0; i < row.length; i++) {
        if (row.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow) {
    const letter = prompt("Введіть літеру для підрахунку:");
    const countFirstRow = countLetter(letter, firstRow);
    const countSecondRow = countLetter(letter, secondRow);

    if (countFirstRow > countSecondRow) {
        return firstRow;
    } else {
        return secondRow;
    }
}

const firstRow = 'Slow and steady wins the race';
const secondRow = 'You can say that again';

alert(getRow(firstRow, secondRow)); 

// 2 task
function formattedPhone(phone) {
    let cleanedPhone = phone.replace(/\D/g, '');

    if (cleanedPhone.length === 10 && cleanedPhone.startsWith('0')) {
        cleanedPhone = '38' + cleanedPhone;
    } else if (cleanedPhone.length === 12 && cleanedPhone.startsWith('38')) {
    } else if (cleanedPhone.length === 11 && cleanedPhone.startsWith('8')) {
        cleanedPhone = '38' + cleanedPhone.slice(1);
    } else {
        return "Невірний формат номера";
    }

    return `+${cleanedPhone.slice(0, 2)} (${cleanedPhone.slice(2, 5)}) ${cleanedPhone.slice(5, 8)}-${cleanedPhone.slice(8, 10)}-${cleanedPhone.slice(10, 12)}`;
}

let phone = prompt("Введіть номер телефону:");
alert(formattedPhone(phone)); 
