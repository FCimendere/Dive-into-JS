function calculateTip() {
    // Get input values
    var textBill = parseFloat(document.getElementById("textBill").value);
    var textTip = parseFloat(document.getElementById("textTip").value);
    var textPerson = parseInt(document.getElementById("textPerson").value);
  
    // Perform the calculation
    var tipAsNum = 1 + textTip / 100;
    var calcPayment = (textBill / textPerson) * tipAsNum;
    var finalAmount = calcPayment.toFixed(2);
  
    // Display the result
    document.getElementById("textTotal").innerHTML = "Final Amount: €" + finalAmount;
  }
  