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


     var result = "";
    // if(trump/8*100 > 0) {
    //   result += "Trump: "+ trump/8*100 + "% ";
    // }
    // if(clinton/8*100 > 0) {
    //   result += "Clinton: "+ clinton/8*100 + "% ";
    // }
    // if(jill/8*100 > 0) {
    //   result += "Jill: "+ jill/8*100 + "% ";
    // }
    // if(gary/8*100 > 0) {
    //   result += "Gary: "+ gary/8*100 + "% ";
    // }
    // if (!result){
    //   result = "You should not vote.";
    // }


    if((trump>jill) && (trump>gary) && (trump>clinton)){
      result = "<h2>You should vote for Donald Trump!</h2>";
      result += "<a href='https://www.donaldjtrump.com/' target='_blank'><img src='img/trump.jpg'></a>"
    } else if ((gary>jill) && (gary>trump) && (gary>clinton)){
      result = "<h2>You should vote for Gary Johnson!</h2>";
      result += "<a href='https://www.johnsonweld.com/' target='_blank'><img src='img/gary.jpg'></a>"
    } else if ((jill>gary) && (jill>trump) && (jill>clinton)){
      result = "<h2>You should vote for Jill Stein!</h2>";
      result += "<a href='http://www.jill2016.com/' target='_blank'><img src='img/jill.png'></a>"
    } else if ((clinton>jill) && (clinton>trump) && (clinton>gary)){
      result = "<h2>You should vote for Hillary Clinton!</h2>";
      result += "<a href='https://www.hillaryclinton.com/' target='_blank'><img src='img/hillary.jpg'></a>"
    } else {
      result = "<h2>You're undecided! Do more research.</h2><div class='row'>";
      result += "<div class='col-sm-3'><a href='https://www.johnsonweld.com/' target='_blank'><img src='img/gary.jpg'></a></div>"
      result += "<div class='col-sm-3'><a href='https://www.hillaryclinton.com/' target='_blank'><img src='img/hillary.jpg'></a></div>"
      result += "<div class='col-sm-3'><a href='https://www.donaldjtrump.com/' target='_blank'><img src='img/trump.jpg'></a></div>"
      result += "<div class='col-sm-3'><a href='http://www.jill2016.com/' target='_blank'><img src='img/jill.png'></a></div></div>"
    }
      $("#results").html(result);
  });
});
