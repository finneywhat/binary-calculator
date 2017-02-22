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
    var decimal = calcDecimal(binary);
    $(".result").text(decimal);
  })
})
