function navAmount (amount, cardAmount,cardInput){
    const nvAmount = document.getElementById("nvAmount")
    const currentAmount = nvAmount.innerText;
    totalAmount = parseInt(currentAmount)-parseInt(amount);
    if(totalAmount >= 0){
        navAmount.innerText = totalAmount;

        // modal popop
        const modalPopop = document.getElementById('modal-popup');
        modalPopop.style.display = "flex";
        return true
        
    } else {
        alert("You do not have sufficient balance!");
        return false;
    }
}

// card function 
function card(button){
    // take index
    const attribute = button.getattributeid("id");
    const index = attribute[attribute.length-1];

    // selector
    const cardInput = document.getElementById(`card-input-${index}`);
    const cardAmount =document.getElementById(`card-amount-${index}`);
    // condition
    if (parseInt(cardInput.value)>0){
        const result = navAmount(cardInput.value);
        if(result){
            card_amount(cardAmount, cardInput);
            history(cardAmount, cardInput);
        }
    }else{
        alert("Invalid Donation Amount!!");
    }
}

// functionAddCardAmount
function card_amount(cardAmount,cardInput){
    const currentAmount = cardAmount.innerText;
    const totalAmount = parseInt(currentAmount)+parseInt(cardAmount.value);
    cardAmount.innerText = totalAmount;
    
}

// history function

function history(cardAmount, cardInput){
        console.log(cardInput.parentElement.children[1]);


        // append h1 and p to div
        div.append(h1,p);
        div.classList.add("history-div");

        // append in history
        const history = document.getElementById("Hisotory");
        history.prepend(div);
        
}