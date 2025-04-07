let BinToDec = (value) => { //Функция перевода двоичного числа в десятичное. Принимает value (число переводимое)

    console.log(value);

    bitLen = value.length; //Длина числа
    res = 0; //Результат
    add = Math.pow(2, bitLen-1); //Что добавить

    for (let element = 0; element < bitLen; element++){

        if (value[element] == "1"){ //Если бит единичка
            res += add;
        }

        add /= 2;

    }

    return res; //Возврат результата

}
