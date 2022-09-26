const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const checkButton=document.querySelector("#check-button");//
const message=document.querySelector("#error-message");
const billError=document.querySelector("#bill-error");
const availableNotes=[2000,500,200,100,50,20,10,5,2,1]
const noOFNotes=document.querySelectorAll('.no-of-notes');
const nextButton=document.querySelector('#next-button');//



nextButton.addEventListener('click',function(){
    setVisibility('hide1','block')})
    // document.getElementById('hide1').style.display='block';
checkButton.addEventListener("click",function validateBillANdCashAmount(){
    hideMessage();
    // console.log(billAmount.value)
    if(billAmount.value>0){
        if(Number(cashGiven.value) > Number(billAmount.value)){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            setVisibility('hide2','block');
            calculateChange(amountToBeReturned);
        }else{
            setVisibility('hide2','block');
            showMessageCash("Do you want to  wash plates please?");

        }
    }else{
        setVisibility('hide2','block');
        showMessageCash("Invalid bill amount");
    }
});

function hideMessage(){
    message.style.display='none';
}
function showMessageCash(msg){
    // console.log(msg)
    message.style.display="block";
    message.innerText=msg;
}
function showMessageBillAmount(msg){
    billError.style.display='block';
    billError.innerText=msg
}


function calculateChange(amountToBeReturned){
    // Go over all the avaib=lable notes
    for(let i=0; i< availableNotes.length;i++){
        // No of notes need for the denominator
        const numberOfNotes=Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned%=availableNotes[i];
        // amount left after calculating  the numberof notes needed
        noOFNotes[i].innerText=numberOfNotes;
        // Update the no of notes in the table foe th currebt amount
    }
}

function setVisibility(id,visibility){
    document.getElementById(id).style.display=visibility;
}


