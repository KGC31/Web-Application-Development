function calculate() {
    // Get number by text for validating if the number input is null (the parseFloat will make the null input become NaN which is similar to the text validation)
    num1 = document.querySelector('input[name="num1"]').value;
    num2 = document.querySelector('input[name="num2"]').value;

    // Check if num1 and num2 is null or not
    if(num1 == "" || num2 == ""){
        document.getElementById("notice").innerHTML = "Nhập số để tiếp tục";
        return false;
    }

    // Parse num1 and num2 into Float type 
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    // Check if the user has chosen the calculation
    try{
        calculation = document.querySelector('input[name="flexRadioDefault"]:checked').value;
    }
    catch(error){
        document.getElementById("notice").innerHTML = "Phải chọn phép tính để tiếp tục";
        return false;
    }
    
    // Check if the numbers are text
    if(isNaN(num1)){
        document.getElementById("notice").innerHTML = "Giá trị nhập ở ô Số thứ nhất không phải là số";
        return false;
    }
    else if(isNaN(num2)){
        document.getElementById("notice").innerHTML = "Giá trị nhập ở ô Số thứ hai không phải là số";
        return false;
    }

    // Calculate sum of number
    if (calculation == "sum"){
        result = num1 + num2;
    }

    // Calculate subtraction of numbers
    if (calculation == "sub"){
        result = num1 - num2;
    }

    // Calculate multiplication of numbers
    if (calculation == "mul"){
        result = num1 * num2;
    }
    
    // Calculate division of numbers
    if (calculation == "div"){
        result = num1 / num2;
    }

    // Show result and delete errors notification
    document.getElementById("result").innerHTML = result;
    document.getElementById("notice").innerHTML = "";

    // Return false so that the website doesn't refresh when submitting the form
    return false;
  }
