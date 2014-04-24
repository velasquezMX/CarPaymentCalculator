/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function computePayment(loan,apr,n){
    var newApr = (apr / 100) / 12;
    var temp = newApr * Math.pow((1 + newApr),n);
    var temp2 = Math.pow((1+newApr),n) - 1;
    //temp = temp.toFixed(2);
    //temp2 = temp2.toFixed(2);
    var payment = loan * (temp / temp2);
    payment = payment.toFixed(2);
    var finalAmount = payment * n;
    finalAmount = finalAmount.toFixed(2);
    var interestAmount = finalAmount - loan;
    interestAmount = interestAmount.toFixed(2);
    document.getElementById("payment").value = payment;
    document.getElementById("final").value = finalAmount;
    document.getElementById("interest").value = interestAmount;
}
