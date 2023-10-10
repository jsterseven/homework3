function kolobok(name) {
    switch (name) {
        case 'дедушка':
            return 'Я от дедушки ушёл';
        case 'заяц':
            return 'Я от зайца ушёл';
        case 'лиса':
            return ' Меня съели';
        default:
            return 'Введите персонажа.';
    }
}

function newYear(name) {
    let person;
    switch (name) {
        case 'Дед Мороз':
            person = name;
            break;
        case 'Снегурочка':
            person = name;
            break;
        default:
            return 'Нужен другой персонаж';
    }

    return `${person}! `.repeat(3);
}
