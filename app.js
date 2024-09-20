var resultBox = document.getElementById("result")
var lastInput = document.getElementById("lastInput")


function addNumber(val){
    if(val == '.' && resultBox.value.includes('.')){
        return;
    }else{
        resultBox.value += val
    }

}

function clearRes(){
    resultBox.value = ''
    lastInput.value = ''
}

function deleteLastInput() {
    resultBox.value = resultBox.value.slice(0,-1)
}

function doCalc(ope){
    
    if(lastInput.value != '' && !lastInput.value.includes("=")){
        resultBox.value = eval(lastInput.value + resultBox.value)
    }else if(lastInput.value.includes("=")){
        lastInput.value = resultBox.value
    }
    lastInput.value = resultBox.value + " " + ope + " "
    resultBox.value = ''
}

function calcFinalRes(){
    var opeString = lastInput.value + resultBox.value + ' = '
    resultBox.value = eval(lastInput.value + resultBox.value)
    lastInput.value = opeString
}