const buy = document.querySelector("#buy");
const quantity = document.querySelector("#quantity");
const sell = document.querySelector("#sell");
const calculateBtn = document.querySelector("#calculate-btn");
const clearBtn = document.querySelector("#clear-btn");
const outputEl = document.querySelector("#output");

// add event listner to calculate btn and added a function submitHandler
calculateBtn.addEventListener('click', submitHandler);

// now we need to create a function submitHandler to handle the button click
// we need to store the values in a variable in this function
// this function is just doing the wiring! it's accessing the three inputs and passing it to calculateProfitAndLoss Function
function submitHandler(){
    var ip = buy.value;
    var qty = quantity.value;
    var curr = sell.value;

    calculateProfitAndLoss(ip, qty, curr);
}

function start() {
    buy.value = "";
    quantity.value = "";
    sell.value = "";
    outputEl.innerText = "";
}

// logic 
// Profit = (SellingPrice - CostPrice)
// profit % = (Profit/CostPrice)*100
// loss = (Costprice - sellingprice)
// loss % = (loss/costprice)*!00

// we need 3 inputs for this function
                                // here we need 3 inputs so give names according and use if else and inside it write the logic 
function calculateProfitAndLoss(initial, quant, current) 
{
    if(initial > current) {
        var loss =(initial - current)* quant;
        var lossPercentage = (loss / initial) *100;
        // created one more variable to Limit the Decimal points to 2 digits
        var lossPercent = lossPercentage.toFixed(2);

        // here we used ` symbol
        showOutput(`Hey the loss is ${loss} and the lost percent is ${lossPercent}%`);

    } else if (initial < current) {
        var profit =(current - initial)* quant;
        var profitPercentage = (profit / initial) *100;
        var profitPercent = profitPercentage.toFixed(2);

        showOutput(`Hey the profit is ${profit} and the profit percent is ${profitPercent}%`);
    } else {
        showOutput(`No pain no gain and no gain no pain`);
    }
}

// created one output function so it will get in the div part and show the output
function showOutput(message) {
    outputEl.innerHTML = message;
}


clearBtn.addEventListener("click", start);
start();