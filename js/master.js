//Business Logic (currently not working)
/*var factorial = function(number) {
  if (number === 0) {
    var total = 1
    return total
  } else {
    for (index = 1; index <= number; index += 1) {
      var total = 1*index;
      return total
    };
  };
};
*/
//User Interface Logic
$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    //debugger
    var number = parseInt($("input#number").val());
    var total = 1
    if (number === 0) {
      total = 1
    } else {
      for (index = 1; index <= number; index += 1) {
        total = total * index
      }
    }
    alert(number + "! equals " + total);
  });
});
