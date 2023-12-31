// for total price
let totalPrice = 0;
function handleClickBtn(target){
    // to get item names
    const selectedItems = document.getElementById('item-names');
    const itemName = (target.childNodes[1].childNodes[3].childNodes[3].innerText);
    // create element
    const li = document.createElement('li');
    li.innerText = itemName;
    console.log(li); 
    selectedItems.appendChild(li);   
    li.classList.add('font-bold');

    // to get item prices
    const itemPrice = target.childNodes[1].childNodes[3].childNodes[5].innerText.split(" ")[0];
    totalPrice = parseFloat(totalPrice) + parseFloat(itemPrice);
    document.getElementById('total').innerText= totalPrice ;

    // enable apply button
    if (totalPrice >= 200) {
        document.getElementById('btn-apply').removeAttribute('disabled');
    }
    // enable purchases button
    if (totalPrice > 0 || offerPrice > 0){
        document.getElementById('btn-purchase').removeAttribute('disabled');
    }
}

// for discount section
document.getElementById('btn-apply').addEventListener('click', function () {
    const inputValue = document.getElementById('apply-coupon');
    const inputValueText = inputValue.value;
    if (inputValueText === 'SELL200') {
        const discountValue = totalPrice * 0.2;
        const discountAmount = discountValue.toFixed(2);
        document.getElementById('discount').innerText = discountAmount;
        const offerAmount = totalPrice - discountValue;
        document.getElementById('offer').innerText = offerAmount;
    }
    else{
        alert('Please insert your Coupon Code')
    }
    return inputValueText;
})

// // to go back home page
document.getElementById('btn-home').addEventListener('click', function () {
    window.location.reload();
})