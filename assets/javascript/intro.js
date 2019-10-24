$(document).ready(function () {
    
    // Called Intro
    intro();







    // Welcome Page Feature
    function intro(){
        var index = ["About Me", "My Portfolio", "My Contacts"];
        var indexID = ["aboutMe", "portfolio", "contacts"];
        var headerHold = $("<section id='intoHeader' class='row d-flex justify-content-center'>");
        headerHold.append("<h1 class='col-lg-9 col-sm-12'>");
        headerHold.append("What do you want to see first?");
        headerHold.append("</h1></section>");

        $("#body").append(headerHold);

        var buttonHold = $("<section id='buttons' class='row d-flex justify-content-center'>");
        $("#body").append(buttonHold);
        
        for (i="0"; i < index.length; i++){ 
            buttonHold = $("<button id='"+ indexID[i] +"' class='button col-lr-3 col-sm-2' value=" +i +">"); 
            buttonHold.append(index[i]);
            $("#buttons").append(buttonHold);
            console.log("Buttons appended");
        }

        $(".button").on("click", function(){
            console.log("Button Clicked");
            var item = $(this).val();
            console.log(item);

            if (item == "0"){
                // If AboutMe clicked
                $("#body").empty();
                window.location.replace("aboutMe.html");
                console.log("Button click: " +item);

            } else if (item == "1"){
                // If Portfolio clicked
                $("#body").empty();
                window.location.replace("portfolio.html");
                console.log("Button click: " +item);
                
            } else if (item == "2"){
                // If Contacts clicked
                $("#body").empty();
                window.location.replace("contacts.html");
                console.log("Button click: " +item);

            }
        })
        console.log("Intro Function Complete");
    };




});