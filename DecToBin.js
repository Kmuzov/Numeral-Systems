let DecToBin = (value) => { //Функция перевода десятичного числа в двоичное. Принимает value (число переводимое)

    let res = ""; //Результат

    //Какая длина у числа
    let bitValue = 0; //Длина
    while (Math.pow(2, bitValue) <= value) { //Цикл
        bitValue += 1 //Инкремент
    }

    for (let bit = bitValue-1; bit >= 0; bit--){ //Перебор числа

        if (Math.pow(2, bit) <= value){ //Если 2^bit < числа то:

                value -= Math.pow(2, bit); //Отнимаем от аргумента value, 2^bit
                res += "1"; //Прибавляем к res 1

        } else { //Иначе
            res += "0"; //Прибавляем к res "0"
        }

    }

    return res; //Возврат результата

}