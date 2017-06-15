// function calc(firstNumber, secondNumber, operator){
//   let numOne = firstNumber;
//   let numTwo = secondNumber;
//   let product = 0;
//   if(operator === "*"){
//     product = numOne * numTwo;
//   }else if (operator === "/"){
//     product = numOne / numTwo;
//   }else if (operator === "+"){
//     product = numOne + numTwo;
//   }else if (operator === "-"){
//     product = numOne - numTwo;
//   }
//   return product;
// }
//
//
// function arrayConcatinator(array){
//   let num = "";
//   for(i = 0; i < array.length; i++){
//       num = num + array[i];
//   }
//   num = parseInt(num);
//   console.log(num);
//   return num;
// }
//
// function makeOperator(id){
//
// }
//JavaScript
function squareRootThatNum(num)
{
  let tempNum = num;
  let input = "";
  let paraStatus = false;
  while(paraStatus === false)
  {
    if(buttonId.id === ")")
    {
      paraStatus = true;
    }
    else
    {
      input += buttonId.id;
    }
  }
  let square = "" + Math.squareRoot(parseInt(input));
  num = num + square;
  return num;


}




var buttonArray = document.querySelectorAll("button");
var firstString = "";
var secondString = "";
let status = false;
let output = document.getElementById('output');


while( status == false )
{
  for(i = 0; i < buttonArray.length; i++)
  {
    let buttonId = document.getElementById(buttonArray[i].id);
    let buttonStatus = document.getElementById(buttonArray[i]);

    console.log(buttonId);

    if(buttonId.id === "0" || buttonId.id === "." || buttonId.id === "1" || buttonId.id === "2" || buttonId.id === "3" || buttonId.id === "4" || buttonId.id === "5" || buttonId.id === "6" || buttonId.id === "7" || buttonId.id === "8" || buttonId.id === "9" || buttonId.id === "*" || buttonId.id === "+" || buttonId.id === "-" || buttonId.id === "/" ||buttonId.id === "(" || buttonId.id === ")" || buttonId.id === "%")
    {
      buttonId.addEventListener('click', function captureNumber()
      {

        firstString = firstString + buttonId.id;
        secondString = secondString + buttonId.id;

        console.log(firstString);
        output.textContent = firstString;
      });
    }
    else if (buttonId.id === "sqrt()")
    {
      let placeHolderString = firstString;
      buttonId.addEventListener('click',function calculateSquareRoot()
      {
        firstString += "\u221A(";
        secondString += "Math.sqrt("
        output.textContent = firstString;
      }
    );
    }
    else if (buttonId.id === "=")
    {
      buttonId.addEventListener('click', function doOperation()
      {
          let a = eval(secondString);
          console.log(firstString);
          console.log(secondString);
          console.log(a);
          console.log("you pressed " + buttonId.id);
          firstString = "";
          secondString ="";
          output.textContent = a;
      }
    );
  }
  else if (buttonId.id === "clear")
  {
      buttonId.addEventListener('click', function clearFunction()
      {
        firstString = "";
        secondString = "";
        output.textContent = firstString;
      }
    );
  }

  }

  console.log("youve made it out.");
  status = true;
}




// for(i = 0; i < buttonArray.length; i++)
// {
//   let buttonId = document.getElementById(buttonArray[i].id);
//   let buttonStatus = document.getElementById(buttonArray[i]);
//
//   console.log(buttonId);
//
//   if(buttonId.id === "0" || buttonId.id === "." || buttonId.id === "1" || buttonId.id === "2" || buttonId.id === "3" || buttonId.id === "4" || buttonId.id === "5" || buttonId.id === "6" || buttonId.id === "7" || buttonId.id === "8" || buttonId.id === "9")
//   {
//     buttonId.addEventListener('click', function captureNumber()
//     {
//       firstNumberArray.push(buttonId.id);
//       console.log(firstNumberArray);
//     });
//   }
//   else if(buttonId.id === "=" || buttonId.id ==="*" || buttonId.id ==="-" || buttonId.id ==="/" || buttonId.id ==="+")
//   {
//     buttonId.addEventListener('click', changeState, true);
//     console.log("Hey you clicked = " + buttonId);
//   }
//
// }


// let button0 = document.getElementById('0');
// turnToButton(button0);
//
// let buttonPoint = document.getElementById('.');
// turnToButton(buttonPoint);
//
// let button1 = document.getElementById('1');
// turnToButton(button1);
//
// let button2 = document.getElementById('2');
// turnToButton(button2);
//
// let button3 = document.getElementById('3');
// turnToButton(button3);
//
// let button4 = document.getElementById('4');
// turnToButton(button4);
//
// let button5 = document.getElementById('5');
// turnToButton(button5);
//
// let button6 = document.getElementById('6');
// turnToButton(button6);
//
// let button7 = document.getElementById('7');
// turnToButton(button7);
//
// let button8 = document.getElementById('8');
// turnToButton(button8);
//
// let button9 = document.getElementById('9');
// turnToButton(button9);
//
// function turnToButton(button){
//       buttonId = button;
//       buttonId.addEventListener('click', function storeNumber(){
//       let number = buttonId.id;
//       console.log(firstNumberArray);
//       return firstNumberArray.push(number);
//
//     });
//   }
//
// // console.log(firstNumberArray);
// //   }else if(buttonId.id === "+"  || buttonId.id === "-"  || buttonId.id === "*"  || buttonId.id === "/"){
// //     buttonId.id.addEventListener('click', function storeOperator(){
// //       operator = buttonId.id;
// //
// //       firstNum = firstNumberArray;
//
//       firstNumberArray = [];
//
//       console.log("First Number: " + firstNum);
//     });
//   }else if(buttonId.id === "="){
//     buttonId.id.addEventListener('click', function doCalculation(){
//     secondNum = firstNumberArray;
//     console.log("Second Number: " +secondNum);
//   });
// }
//
// }







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
