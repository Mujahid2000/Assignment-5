const totalTkFiled = document.getElementById("total-tk");
const purchaseBtn = document.getElementById("purchase");
const applyBtn = document.getElementById("apply");
const couponeInput = document.getElementById("discound-price");
const myDiscount = document.getElementById("my-discount");
const totalLast = document.getElementById("total-last");
const selectedItems = document.getElementById("selected-items");
let total = 0;
let count = 1;
function handleClick(card) {
    const text = card.children[2].children[0].innerText;
    selectedItems.innerHTML += `<p>${count}. ${text}</p>`;
    count += 1;
    const price = card.children[2].children[1].innerText.split(' ')[0];
    total = total + parseFloat(price);
    totalTkFiled.innerText = total + 'TK';
    if (total > 0) {
        purchaseBtn.disabled = false
    }
    if (total > 199) {
        apply.disabled = false;
    }
}


function handleCoupone() {
    const value = couponeInput.value;
    if (value === "SELL200") {
        myDiscount.innerText = (total * 0.2).toFixed(2) + 'TK';
        totalLast.innerText = (total * 0.8).toFixed(2) + 'TK';
    }
    else {
        myDiscount.innerText = '00TK';
        totalLast.innerText = '00TK';
    }
}

function makePurchase() {
    myDiscount.innerText = '00TK';
    totalLast.innerText = '00TK';
    totalTkFiled.innerText = '00TK';
    selectedItems.innerHTML = ``;
    couponeInput.value = '';
    purchaseBtn.disabled = true;
    apply.disabled = true;
}

purchaseBtn.disabled = true;
apply.disabled = true;