$(document).ready(function () {
  //1.
  $("#accept").click(function () {
    $("#submitbtn").attr("disabled", !this.checked);
  });


  //2.
  $("textarea").focus(function () {
    $("#mesaj-scurt").attr("maxlength", 15);
    $("#mesaj-scurt").keyup(function () {
      var max = 15;
      var len = $(this).val().length;
      var char = max - len;
      $("#caractere-ramase").text(char + ' caractere ramase');
    })
  });


  //3.
  var colors = {
    "color1": "Red",
    "color2": "Green",
    'color3': "Blue"
  };

  var select = $('<select></select>');
  $("#dropdown").append(select);
  $.each(colors, function (key, value) {
    select.append($("<option value='" + value + "'>" + key + "</option>"));
  });


  //4.
  $(".sub").replaceWith(function () {
    return "<h1>" + $(this).html() + "</h1>"
  });


  //5.
  $("#tinta").submit(function (event) {
    alert("Submit was called for " + $(this).attr('name'));
    event.preventDefault();
  });


  //6.
  $("#myButton").click(function () {
    $(this).attr('type', 'submit');
    $(this).attr('form', 'myForm');
    $("#myForm").submit(function (event) {
      //sa fie diferit de exercitiul de sus, am pus ca in alert sa-mi apara ceea ce este trecut in inputuri
      var input1 = $('#myForm').find('input[name="1"]').val();
      var input2 = $('#myForm').find('input[name="2"]').val();
      alert("Submit was called for " + input1 + ' si ' + input2);
      event.preventDefault();
    })
  });

});

