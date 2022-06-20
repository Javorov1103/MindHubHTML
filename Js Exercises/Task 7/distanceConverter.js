function attachEventsListeners() {
    var converetbtn = document.getElementById("convert");
    converetbtn.onclick = () => {
        var inputDistance = document.getElementById("inputDistance");
        var inputUnitsSelectBox = document.getElementById("inputUnits");
        var outputUnitsSelectBox = document.getElementById("outputUnits");
        var ouputDistance = document.getElementById("outputDistance");

        //Входящо число за конвертиране
        var inputNumber = inputDistance.value;
        //Входяща мерна единица
        var inputUnit = inputUnitsSelectBox.value;
        console.log(inputUnitsSelectBox.value);
        console.log(inputUnitsSelectBox.selectedIndex);
        //Изходяща мерна единица
        var ouputUnit = outputUnitsSelectBox.value;

        var outputNumber =0;

        if (inputUnit === 'km' && ouputUnit === 'm') {
            outputNumber = inputNumber * 1000;
        }
        //Добави осталните 63 комбинации

        ouputDistance.value = outputNumber;
    }
}