$(document).ready(function() {

  $("form").submit(function(event){
    if(parseInt($("input#age").val())>= 18){
      $(".adult").show();
    } else {
      $(".minor").show();
    }
    event.preventDefault();
    $("#votingAge").hide();
  });

  $("form#survey").submit(function(event){
    event.preventDefault();
    var q1Answer = $("input:radio[name=q1]:checked").val();
    var q2Answer = $("input:radio[name=q2]:checked").val();
    var q3Answer = $("input:radio[name=q3]:checked").val();
    var q4Answer = $("input:radio[name=q4]:checked").val();

    var trump = 0;
    var clinton = 0;
    var jill = 0;
    var gary = 0;

    if(q1Answer === "mcdonalds") {
      trump += 1;
    } else if (q1Answer === "foodcart"){
      jill +=1;
    }else if (q1Answer === "olivegarden"){
      gary +=1;
    }else if (q1Answer === "mcmenamins"){
      clinton +=1;
    }

    if(q2Answer === "duckdynasty") {
      trump += 2;
    } else if (q2Answer === "truth"){
      jill +=2;
    } else if (q2Answer === "portlandia"){
      gary +=2;
    } else if (q2Answer === "hamilton"){
      clinton +=2;
    }

    if(q3Answer === "hunt") {
      trump += 2;
    } else if (q3Answer === "social"){
      jill +=2;
    } else if (q3Answer === "play"){
      gary +=2;
    } else if (q3Answer === "work"){
      clinton +=2;
    }
    if(q4Answer === "immigration") {
      trump += 3;
      clinton -= 1;
      jill -= 1;
    } else if (q4Answer === "enviroment"){
      jill += 3;
      trump -=2;
    } else if (q4Answer === "loans"){
      jill += 3;
      clinton +=1;
    } else if (q4Answer === "regulation"){
      trump += 2;
      gary += 2;
      clinton -= 1;
      jill -= 2;
    } else if (q4Answer === "diplomacy"){
      clinton +=3;
      trump -= 3;
    }

    alert ("Trump: " + trump + ", Clinton: " + clinton + ", Gary: " + gary + ", Jill: " + jill);
  });
});
