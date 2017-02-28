function calc() {
  var sub = parseFloat(document.getElementById('sub').value);
  var tipPerc = parseFloat(document.getElementById('tipPerc').value) / 100;

  var tip = sub * tipPerc;
  var total = sub + tip;

  document.getElementById('subtotal').innerHTML = sub.toFixed(2);
  document.getElementById('tip').innerHTML = tip.toFixed(2);
  document.getElementById('total').innerHTML = total.toFixed(2);
}
