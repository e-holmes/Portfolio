$(document).ready(function () {
    
    // Called Intro
    intro();







    // Welcome Page Feature
    function intro(){
        var index = ["About Me", "My Portfolio", "Contact Me"];
        var indexID = ["aboutMe", "portfolio", "contacts"];

        for (i="0"; i < index.length; i++){ 
            var buttonHold = $("<div class='col-lr-1 col-md-2 col-sm-3 col-xs-12'>");
            buttonHold.append("<button id='"+ indexID[i] +"' class='button' value=" +i +">" +index[i]);
            $("#intoButton").append(buttonHold);
            console.log("Buttons appended");
        }

        $(".button").on("click", function(){
            console.log("Button Clicked");
            var item = $(this).val();
            console.log(item);

            if (item == "0"){
                // If AboutMe clicked
                $("#body").empty();
                window.location.assign("html/aboutMe.html");

                console.log("Button click: " +item);


            } else if (item == "1"){
                // If Portfolio clicked
                $("#body").empty();
                window.location.assign("html/portfolio.html");
                console.log("Button click: " +item);
                
            } else if (item == "2"){
                // If Contacts clicked
                $("#body").empty();
                window.location.assign("html/contacts.html");
                console.log("Button click: " +item);

            }
        })
        console.log("Intro Function Complete");
    };




});