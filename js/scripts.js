// Back-End
function calcDecimal(binary) {
  var binaryArray = binary.split('');
  binaryArray.reverse();
  console.log(binaryArray);
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
