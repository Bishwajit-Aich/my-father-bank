document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithDrawAmountString);

    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a Valid Number');
        return;
    }
   
    

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
 




       const balanceTotalElement = document.getElementById('balance-total');
       const previousBalanceTotalString = balanceTotalElement.innerText;
       const previousBalanceTotal = parseFloat(previousBalanceTotalString);

       withdrawField.value = '';

if(newWithdrawAmount > previousBalanceTotal){
    alert('Hey Your Balance Is insufficient!!!!');
    return;
}



const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    
withdrawTotalElement.innerText = currentWithdrawTotal;


       const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

       balanceTotalElement.innerText = newBalanceTotal;





  


})