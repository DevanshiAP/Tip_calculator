const range = document.getElementById("tiprange");
const tipout = document.getElementById("percentout");
const btncalculator = document.getElementById("btncalculator");
const billamount = document.getElementById("billamount");
const resultarea = document.getElementById("result");


range.oninput = function(){
    const val = range?.value ? range.value : 5;
    tipout.innerHTML = val + "%";
}

btncalculator.onclick = function(){
    let bill = parseFloat(billamount.value);
    let tip = (bill * (range.value/100)).toFixed(2);
    let total = (bill + parseFloat(tip)).toFixed(2);
    let out = `<strong>Tip Amount:</strong>$${tip} <br/><strong> Total Amount:</strong> $${total}`;
    resultarea.innerHTML = out;
}