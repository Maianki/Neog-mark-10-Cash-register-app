var billAmount = document.querySelector("#bill-amount")

var cashGiven = document.querySelector("#cash-given")

var checkButton = document.querySelector("#btn-check")

var nextButton = document.querySelector("#btn-next")

var elementsHidden = document.querySelector(".elements-hidden")

var message = document.querySelector(".message")

var noOfNotes = document.querySelectorAll(".no-of-notes")

var denominations = [2000,500,100,20,10,5,1]

elementsHidden.style.display = "none"

function nextButtonEventHandler(){
    if(billAmount.value>0){
        elementsHidden.style.display = "block"
        message.style.display = "none"
    }else{
        message.style.display = "block"
        billAmountValidation();
    }
}

function checkButtonEventHandler(){

    if(billAmount.value>0){
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            message.style.display = "none"
            var amountLeft = cashGiven.value - billAmount.value
            calculateNoOfNotes(amountLeft)           
        }else{
            message.style.display = "block"
            cashGivenValidation()
        }
    }
        
}


function cashGivenValidation(){

    if(isNaN(cashGiven.value)===true){    
        message.innerText = "Cash Given should be a number and greater than bill amount"
    }else if(cashGiven.value<0){
        message.innerText = "Cash given should be greater than zero and bill amount"
    }else{
        message.innerText = "Cash given should be greater than bill amount"
    }

}

function billAmountValidation(){

    if(isNaN(billAmount.value)===true){    
        message.innerText = "Amount should be a number"
    }else{
        message.innerText = "Bill amount should be greater than zero"
    }
}

function calculateNoOfNotes(amountLeft){
    for(var i=0; i<denominations.length;i++){
        var totalNotes = parseInt(amountLeft/denominations[i])
        amountLeft = amountLeft % denominations[i]
        noOfNotes[i].innerText = totalNotes
    }
    
}


checkButton.addEventListener("click",checkButtonEventHandler)
nextButton.addEventListener("click",nextButtonEventHandler)