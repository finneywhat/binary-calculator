// Back-End
function calcBinary(binary) {
  var binaryArray = binary.split('');
  var decimalNum = 0;
  binaryArray.reverse();
  for (var i = 0; i < binaryArray.length; i++) {
    num = parseInt(binaryArray[i]);
    decimalNum = decimalNum + (num * (2 ** i));
  }
  return decimalNum;
}

function calcTrinary(trinary) {
  var trinaryArray = trinary.split('');
  var decimalNum = 0;
  trinaryArray.reverse();
  for (var i = 0; i < trinaryArray.length; i++) {
    num = parseInt(trinaryArray[i]);
    decimalNum = decimalNum + (num * (3 ** i));
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
      $("#userTrinary").hide();
      $("#userBinary").hide();
      $("#error").show();
      console.log("This is an error");
    } else {
      var decimal = calcBinary(binary);
      $(".result").show();
      $("#userBinary").show();
      $("#error").hide();
      $("#userTrinary").hide();
      $("#userBinary span").text(binary);
      $("#userDecimal").text(decimal);
    }

  })

  $("#trinaryForm").submit(function() {
    event.preventDefault();

    var trinary = $("input#trinary").val();
    var regEx = /[^012]/;
    if (regEx.test(trinary)) {
      $(".result").hide();
      $("#userBinary").hide();
      $("#userTrinary").hide();
      $("#error").show();
      console.log("This is an error");
    } else {
      var decimal = calcTrinary(trinary);
      $(".result").show();
      $("#userTrinary").show();
      $("#error").hide();
      $("#userBinary").hide();
      $("#userTrinary span").text(trinary);
      $("#userDecimal").text(decimal);
    }

  })
})
