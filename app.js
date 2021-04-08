

function CalculateNumbers() {
    var number1 = document.getElementById('Num1');
    var number2 = document.getElementById('Num2');
    var operator = document.getElementById('operator')
    var resualtElement = document.getElementById('resualt');
    console.log( operator.value);

    if ( operator.value === '+'){
        var resualt = Number(number1.value)+ Number(number2.value); 
    }else if (operator.value === '-'){
        var resualt = Number(number1.value) -  Number(number2.value); 
    }else if(operator.value === '*'){
        var resualt = Number(number1.value) * Number(number2.value); 
    }else if(operator.value === '/'){
        var resualt = Number(number1.value) /  Number(number2.value); 
    }

    // push the resualt to the html
    resualtElement.innerHTML ='Resualt = '+resualt;

}