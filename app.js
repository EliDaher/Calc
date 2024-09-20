var resultBox = document.getElementById("result")
var lastInput = document.getElementById("lastInput")


function addNumber(val){
    //add the user input
    if(val == '.' && resultBox.value.includes('.')){
        return;
    }else{
        resultBox.value += val
    }

}

function clearRes(){
    //cleaer every input in the calculator
    resultBox.value = ''
    lastInput.value = ''
}

function deleteLastInput() {
    //delete the last number in the result box
    resultBox.value = resultBox.value.slice(0,-1)
}

function doCalc(ope){
    if(resultBox.value != ''){
        
        if(lastInput.value != '' && !lastInput.value.includes("=")){
            //do the calc and prepare to the next operator
            resultBox.value = eval(lastInput.value + resultBox.value)
        }else if(lastInput.value.includes("=")){
            //to do the calc to the last result
            lastInput.value = resultBox.value
        }
        //show the output
        lastInput.value = resultBox.value + " " + ope + " "
        resultBox.value = ''

    }else if(lastInput.value != ''){
        //change the operator
        lastInput.value = lastInput.value.slice(0,-2) + ope + " "
    }
}

function calcFinalRes(){
    //calc and show the final result
    if(resultBox.value != ''){
        var opeString = lastInput.value + resultBox.value + ' = '
        resultBox.value = eval(lastInput.value + resultBox.value)
        lastInput.value = opeString
    }
}