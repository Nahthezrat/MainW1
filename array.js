   function FormArray(){
        let array = [],
            input,
            i = 0
        ;

        input = prompt('������� ������� �' + (i+1) + "\n������� Cancel ����� ���������� ����������");
        while(input !== null)
        {
            if (input % 1 !== 0) {
                input = prompt('������. ����� �� �����.\n������� ������� �' + (i+1) + "\n������� Cancel ����� ���������� ����������");
            }
            array[i] = input;
            ++i;
            input = prompt('������� ������� �' + (i+1) + "\n������� Cancel ����� ���������� ����������");
        }

        localStorage.setItem('array', JSON.stringify(array));
        return array;
    }

    function ElementsNum(){
        let array = JSON.parse(localStorage.getItem('array'));
        alert("���������� ���������: " + array.length);
    }

    function MinElement(){
        let array = JSON.parse(localStorage.getItem('array'));
        alert("����������� �������: " + Math.min.apply(null, array));
    }

    function MaxElement(){
        let array = JSON.parse(localStorage.getItem('array'));
        alert("������������ �������: " + Math.max.apply(null, array));
    }

    function ElementsSum(){
        let array = JSON.parse(localStorage.getItem('array')),
            sum = 0
        ;

        for (let element of array) {
            sum += Number(element);
        }
        alert ("����� ���������: " + sum);
    }

    function MidElements(){
        let array = JSON.parse(localStorage.getItem('array')),
            sum = 0
        ;

        for (let element of array) {
            sum += Number(element);
        }
        alert ("������� �������������� ���������: " + sum/array.length);
    }