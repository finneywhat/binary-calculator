// Back-End
function calcDecimal(binary) {
  var binaryArray = binary.split('');
  var decimalNum = 0;
  binaryArray.reverse();
  for (var i = 0; i < binaryArray.length; i++) {
    num = parseInt(binaryArray[i]);
    decimalNum = decimalNum + (num * (2 ** i));
  }
  return decimalNum;
}

// Front-End
$(function() {
  $("#binaryForm").submit(function() {
    event.preventDefault();

    var binary = $("input#binary").val();
    var regEx = /[^01]/;
    if (regEx.test(binary)) {
      $(".result").hide();
      $("#error").show();
      console.log("This is an error");
    } else {
      var decimal = calcDecimal(binary);
      $(".result").show();
      $("#error").hide();
      $("#userBinary").text(binary);
      $("#userDecimal").text(decimal);
    }

  })
})
