function calc(firstNumber, secondNumber, operator){
  let numOne = firstNumber;
  let numTwo = secondNumber;
  let product = 0;
  if(operator === "*"){
    product = numOne * numTwo;
  }else if (operator === "/"){
    product = numOne / numTwo;
  }else if (operator === "+"){
    product = numOne + numTwo;
  }else if (operator === "-"){
    product = numOne - numTwo;
  }
  return product;
}


function arrayConCatinator(array){
  let num = "";
  for(i = 0; i < array.length; i++){
      num = num + array[i];
  }
  num = parseInt(num);
  console.log(num);
  return num;
}



var buttonArray = document.querySelectorAll("button");
var firstNumberArray = [];
var firstNum = [];
var secondNum = [];
var operator;

for(i = 0; i < buttonArray.length; i++){
  let buttonId = document.getElementById(buttonArray[i].id);

  console.log(buttonId);

  if(buttonId.id === "0" || buttonId.id === "." || buttonId.id === "1" || buttonId.id === "2" || buttonId.id === "3" || buttonId.id === "4" || buttonId.id === "5" || buttonId.id === "6" || buttonId.id === "7" || buttonId.id === "8" || buttonId.id === "9"){
    buttonId.addEventListener('click', function storePrint(){
      let output = document.getElementById('output');

      firstNumberArray.push(buttonId.id);

      console.log(firstNumberArray);
    });

  }else if(buttonId.id === "+"  || buttonId.id === "-"  || buttonId.id === "*"  || buttonId.id === "/"){
      operator = buttonId.id;

      firstNum = firstNumberArray;

      firstNumberArray = [];

      console.log("First Number: " + firstNum);

  }else if(buttonId.id === "="){
    secondNum = firstNumberArray;
    console.log("Second Number: " +secondNum);
  }


}







  // var todoList = document.getElementById('todoList');
  //
  // var newItem = document.getElementById('todoInput').value;
  //
  // var x = document.createElement('li');
  //
  // x.textContent = newItem + "-ski";
  //
  // todoInput.value = "";
  //
  //
  // todoList.appendChild(x);






// if(buttonId.id === "1" || buttonId.id === "2" || buttonId.id === "3" || buttonId.id === "4" || buttonId.id === "5" || buttonId.id === "6" || buttonId.id === "7" || buttonId.id === "8" || buttonId.id === "9" || buttonId.id === "0" || buttonId.id ==="."){
