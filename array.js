   function FormArray(){
        let array = [],
            input,
            i = 0
        ;

        input = prompt('Введите элемент №' + (i+1) + "\nНажмите Cancel чтобы прекратить заполнение");
        while(input !== null)
        {
            if (input % 1 !== 0) {
                input = prompt('Ошибка. Число не целое.\nВведите элемент №' + (i+1) + "\nНажмите Cancel чтобы прекратить заполнение");
            }
            array[i] = input;
            ++i;
            input = prompt('Введите элемент №' + (i+1) + "\nНажмите Cancel чтобы прекратить заполнение");
        }

        localStorage.setItem('array', JSON.stringify(array));
        return array;
    }

    function ElementsNum(){
        let array = JSON.parse(localStorage.getItem('array'));
        alert("Количество элементов: " + array.length);
    }

    function MinElement(){
        let array = JSON.parse(localStorage.getItem('array'));
        alert("Минимальный элемент: " + Math.min.apply(null, array));
    }

    function MaxElement(){
        let array = JSON.parse(localStorage.getItem('array'));
        alert("Максимальный элемент: " + Math.max.apply(null, array));
    }

    function ElementsSum(){
        let array = JSON.parse(localStorage.getItem('array')),
            sum = 0
        ;

        for (let element of array) {
            sum += Number(element);
        }
        alert ("Сумма элементов: " + sum);
    }

    function MidElements(){
        let array = JSON.parse(localStorage.getItem('array')),
            sum = 0
        ;

        for (let element of array) {
            sum += Number(element);
        }
        alert ("Среднее арифметическое элементов: " + sum/array.length);
    }