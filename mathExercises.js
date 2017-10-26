function initMultiplication() {
  var mul1 = Math.floor((Math.random() * 10) + 1);
  var mul2 = Math.floor((Math.random() * 10) + 1);
  var exercise = "<span>" + mul1 + " x " + mul2 + " = <input type='text' value='' id='result' /><span id='resultImg'></span></span>";

  $("#var1").val(mul1);
  $("#var2").val(mul2);
  $("#operation").val("*");
  $("#current").html(exercise);
  $("#result").focus();
}

function checkResult() {
	var mul1 = $("#var1").val();
	var mul2 = $("#var2").val();
	var result = $("#result").val();
	
	var img = "<img src='";
	if (mul1 * mul2 == result) {
		img += "images/correct.png";
	} else {
		img += "images/wrong.png";
	}
	img += "' width='32' height='32' />";
	$("#resultImg").html(img);
}