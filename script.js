const numberButton = document.querySelectorAll('[data-number')
const operationButton = document.querySelectorAll('[data-operator')
const clearButton = document.querySelector('#clear')
const equalButton = document.querySelector('#equal')
const toggleButton = document.querySelector('#toggle')
const removeButton = document.querySelector('#remove')
const results = document.querySelector('#results')


let tempVar;
let currentVar = '';
let operator;
let previousVar;
let result;
clearButton.addEventListener('click' , () =>{
    previousVar = '';
    currentVar = '';
    result = 0;
    displayValue(result);
})
toggleButton.addEventListener('click' , () =>{
        if (isNaN(result)) {
            currentVar= Number(currentVar);
            currentVar = -currentVar;
            displayValue(currentVar);
        }
        else{
            result = -result;
            displayValue(result);
        }
        
})
removeButton.addEventListener('click' , () =>{
    currentVar = currentVar.slice(0,-1);

    displayValue(currentVar);
})
equalButton.addEventListener('click' , ()=>{
    calculate();
    displayValue(result);
});

operationButton.forEach(button =>{
    button.addEventListener('click' , operate);
})

numberButton.forEach(button =>{
    button.addEventListener('click' , takeNumber);
})
function operate(e){
    
    if (previousVar !== '') {
        calculate();
    }
    operator = e.target.textContent;
    
    previousVar = currentVar;
    currentVar = '';    

}
function takeNumber(e){
    
    tempVar = e.target.textContent;
    currentVar = currentVar + tempVar;
    displayValue(currentVar);
    
}
function displayValue(value){

    results.textContent = value;
}
function calculate(){
    previousVar = parseFloat(previousVar)
    currentVar = parseFloat(currentVar)
    if (isNaN(previousVar) || isNaN(currentVar)) return

    switch (operator) {
            case '+':
                result = previousVar + currentVar;
            break;
            
            case '-':
                result = previousVar - currentVar;
            break;
            case 'x':
                result = previousVar * currentVar;
            break;
            case '÷':
                result = previousVar / currentVar;
            break;
            case '%':
            
                result = previousVar % currentVar;
            break;
           
          
        default:
            return
            break;
    }
    currentVar = result;
    previousVar = '';

}

