//subTotal tax and the total price
function grandTotal(){
    var subTotalPrice;
    var taxPrice;
    var totalPrice;

    //get the total price of the casing
    const casing = document.getElementById('case-price');
    const casingPriceNumber = parseInt(casing.innerText);
    
    //getting the total price of the phone
    const phone = document.getElementById('phone-price');
    const phonePriceNumber = parseInt(phone.innerText);

    //calculating the subtotal
    subTotalPrice = casingPriceNumber + phonePriceNumber;    
    const subTotal = document.getElementById('subtotal-price');
    subTotal.innerText = subTotalPrice;

    //update the tax_price
    taxPrice = 0.1 * subTotalPrice;
    const tax = document.getElementById('tax-price');
    tax.innerText = taxPrice.toFixed(2);

    //calculate the total price after adding the tax price.
    totalPrice = subTotalPrice + taxPrice;
    const total = document.getElementById('total-price');
    total.innerText = totalPrice;
}

//update the count of the product
function updateCaseNumber(countNumber,isTrue,price,idName){
    const caseInput = document.getElementById(countNumber);
    const caseNumber = caseInput.value;
    if(isTrue==true) {
        caseInput.value = parseInt(caseNumber) + 1;
        // update the price of the casing
        const returnVale = updateCasingPrice(idName,true,price);
        return returnVale;
    }
    else{
        if (caseNumber > 1) {
            caseInput.value = caseNumber - 1;
            // update the price of the casing
            const returnVale = updateCasingPrice(idName,false,price);
            return returnVale;
        }
    }
}
//update the price of the product
function updateCasingPrice(idName,isTrue,price){
    var casePrice = document.getElementById(idName);
    var casePriceNumber = parseInt(casePrice.innerText);
    if(isTrue == true){
        caseTotalPrice = casePriceNumber + price;
        casePrice.innerText = caseTotalPrice; 
        return caseTotalPrice;
    }
    else{
        caseTotalPrice = casePriceNumber - price;
        casePrice.innerText = caseTotalPrice; 
        return caseTotalPrice;
    }
}

//casing
document.getElementById("case-plus").addEventListener("click", function () {
    //update the casing count
    const returnCasingPrice = updateCaseNumber("case-number",true,59,"case-price");  
    casingPrice = returnCasingPrice;
    grandTotal();//function of the subtotal,price and tax
});
document.getElementById("case-minus").addEventListener("click", function () {
    //update the casing count
    const returnCasingPrice = updateCaseNumber("case-number",false,59,"case-price");
    casingPrice = returnCasingPrice;
    grandTotal();//function of the subtotal,price and tax
});


//phone
document.getElementById("phone-plus").addEventListener("click", function (){
    //update the phone count
    const returnPhonePrice = updateCaseNumber("phone-number",true,1219,"phone-price"); 
    phonePrice = returnPhonePrice;
    grandTotal();//function of the subtotal,price and tax
})
document.getElementById("phone-minus").addEventListener("click", function (){
    //update the phone count
    const returnPhonePrice = updateCaseNumber("phone-number",false,1219,"phone-price"); 
    phonePrice = returnPhonePrice;
    grandTotal();//function of the subtotal,price and tax
})