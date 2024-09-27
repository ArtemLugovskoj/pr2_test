// Task 1
function countLetter(letter, row) {
    let count = 0;
    for (let i = 0; i < row.length; i++) {
        if (row.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function getRow() {
    const firstRow = 'Slow and steady wins the race';
    const secondRow = 'You can say that again';
    const letter = prompt("Введіть літеру для підрахунку:");
    const countFirstRow = countLetter(letter, firstRow);
    const countSecondRow = countLetter(letter, secondRow);

    let result;
    if (countFirstRow > countSecondRow) {
        result = firstRow;
    } else {
        result = secondRow;
    }
    alert(result);
}

// Task 2
function formattedPhone() {
    let phone = prompt("Введіть номер телефону:");
    let cleanedPhone = phone.replace(/\D/g, '');

    if (cleanedPhone.length === 10 && cleanedPhone.startsWith('0')) {
        cleanedPhone = '38' + cleanedPhone;
    } else if (cleanedPhone.length === 12 && cleanedPhone.startsWith('38')) {
        // Вже правильно відформатовано
    } else if (cleanedPhone.length === 11 && cleanedPhone.startsWith('8')) {
        cleanedPhone = '38' + cleanedPhone.slice(1);
    } else {
        alert("Невірний формат номера");
        return;
    }

    const formatted = `+${cleanedPhone.slice(0, 2)} (${cleanedPhone.slice(2, 5)}) ${cleanedPhone.slice(5, 8)}-${cleanedPhone.slice(8, 10)}-${cleanedPhone.slice(10, 12)}`;
    alert(formatted);
}

document.getElementById('1').addEventListener('click', getRow);
document.getElementById('2').addEventListener('click', formattedPhone);
