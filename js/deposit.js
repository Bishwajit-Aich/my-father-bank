
document.getElementById('btn-deposit').addEventListener('click',function(){

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';

    if(isNaN(newDepositAmount)){
        alert('Please Provide A Valid Number!!');
        return;
    }
    

    const depositTotalAmount = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalAmount.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalAmount.innerText = currentDepositTotal;



    const balanceTotalAmount = document.getElementById('balance-total');
    const previousBalanceTotalAmountString = balanceTotalAmount.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalAmountString);

    const currentBalanceTotal = previousBalanceTotalAmount + newDepositAmount;

    balanceTotalAmount.innerText = currentBalanceTotal;






    depositField.value = '';
    
})