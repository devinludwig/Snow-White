$(document).ready(function() {
$("#blanks form").submit(function(event){
 var line1Input = $("input#line1").val();




$(".line1").text(line1Input);
    $("#Appointment").show();

    event.preventDefault();


  });
});
/*$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(blank) {
      var userInput = $("input." + blank).val();
      console.log(userInput);
      $("." + blank).text(userInput).val();
    });

    $("#story").show();

    event.preventDefault();
  });
});
