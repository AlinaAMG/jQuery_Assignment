$("document").ready(function () {
    // First button
    $("button").css("cursor", "pointer");

    $(".fade").on("click", function() {
        $(this).fadeOut();
        $(".fade-out").hide();
        $(".c-1").append("<p>jQuery is fun, i am enjoying!</p>").css({ "color": "blue", "font-size": "22px", })
        

   
    })
    //  Second button
    $(".append").on("click", function () {
        $(this).prop("disabled", true).css("background-color", "lightgrey");
        $(".append-text")
            .append("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book")
            .css({ "background-color": "grey", "color": "white", "padding": "20px" })
      
    })
    // Third button
    $(".color").on("click", function() {
        $(this).css({ "color": "white", "background-color": "blue", "font-size": "22px", "width": "50%", "border-radius": "20px" });

    })
    //  Reset button
    $(".reset")
        .css({ "background-color": "blue", "color": "white", "padding": "8px 40px", "margin-top": "30px", "font-size": "20px", "border-radius": "20px", "letter-spacing": "2px", "border": "none" });

    $(".reset").on("click", function () {
        $(".fade").fadeIn();
        $(".fade-out").fadeIn();
        $(".append-text").text("").removeAttr("style");
        $(".append").prop("disabled", false).css("background-color","");
        $(".color").removeAttr("style"); 
        $(".c-1").find("p").remove(); 
        $(".c-1").removeAttr("style"); 
     
 });
});