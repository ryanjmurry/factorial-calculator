//Business Logic
var total = 1
var factorial = function(number) {
  if (number === 0) {
    total = 1
  } else {
    for (index = 1; index <= number; index += 1) {
      total = total * index
    };
  };
};
//User Interface Logic
$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    factorial(number);
    alert(number + "! equals " + total);
    location.reload();
  });
});
