$(document).ready(function(){

    intro();

    $("#RPS").click(function(){
        window.location.href = "https://e-holmes.github.io/RPS-Multiplayer/";
    });

    $("#WG").click(function(){
        window.location.href = "https://e-holmes.github.io/WordGuessGame/";
    });

    $("#J").click(function(){
        window.location.href = "https://e-holmes.github.io/jeopardy/";
    });

    $("#GT").click(function(){
        window.location.href = "https://e-holmes.github.io/GifTastic/";
    });



    function intro(){
        var index = ["About Me", "My Portfolio", "Contact Me"];
        var indexID = ["aboutMe", "portfolio", "contacts"];

        for (i="0"; i < index.length; i++){ 
            var buttonHold = $("<button id='"+ indexID[i] +"' class='button' value=" +i +">"); 
            buttonHold.append(index[i]);
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
                window.location.assign("../html/aboutMe.html");
                
                console.log("Button click: " +item);


            } else if (item == "1"){
                // If Portfolio clicked
                $("#body").empty();
                window.location.assign("../html/portfolio.html");
                console.log("Button click: " +item);
                
            } else if (item == "2"){
                // If Contacts clicked
                $("#body").empty();
                window.location.assign("../html/contacts.html");
                console.log("Button click: " +item);

            }
        })
        console.log("Intro Function Complete");
    };

});