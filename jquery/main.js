$(".dark-btn").click(
    function(){
    $(".square").toggleClass("dark");
    $("body").toggleClass("dark");
  });

  $(".spin-btn").click(
    function(){
        $(".square").toggleClass("spin");
        $("body").toggleClass("spin");
    }
  );

  $(".cher-btn").click(
    function(){
        $(".cher").addClass("reveal");
        $(".cher-btn").hide();
    }
  );

  $( function() {
    $( ".draggable" ).draggable();
  } );