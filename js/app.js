$(function() {

var inputValue;


function  getValue(){
  inputValue = $("#initialNumber").val();
  console.log(inputValue);
  changeValue();
}

$("#convert").click(getValue);

var newValue;

function changeValue(){
  var newValue = inputValue * 1.8 +32;
  parseInt(newValue);
  console.log(newValue);

  $("#fahrenheitResult .answer").text(newValue);

  if (newValue <= 65) {
    $('body').css("background-image","url(images/glacier2.jpg)");
  } else if (newValue <= 85) {
    $('body').css("background-image","url(images/springdaisy2.jpg)");
  } else {
    $('body').css("background-image","url(images/beach.jpg)");
  }

}

// if newValue <= 65 {.css("background-color", "blue");
// } else  {if newValue <= 90.css("background-color", "orange");
// } else  newValue >= 90.css(("background-color", "red");





});