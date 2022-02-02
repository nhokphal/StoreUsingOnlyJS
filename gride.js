

document.addEventListener('DOMContentLoaded', function(){
    var homePage = document.getElementById('home');
    homePage.style.backgroundColor = "grey";
    homePage.style.color = "white";

    console.log(homePage);

    var homeAbout = document.getElementById('about');
    homeAbout.style.backgroundColor = "";
    homeAbout.style.color = "black";
    homeAbout.addEventListener("mouseover", function(event){
       event.target.style = "orange" ;
        
    });


    var homeContact= document.getElementById('contact');
    homeContact.style.backgroundColor = "";
    homeContact.style.color = "black";
    homeContact.addEventListener("mouseover", function(event){
        event.target.style = "orange" ;
         
     });
    //homeContact.style.top = "100px";


    var headingDiv = document.getElementById('heading');
    headingDiv.style.top = "100px";


    var cardTitle = document.getElementsByClassName("cardName");
    cardTitle.innerHTML = "hi";
    console.log(cardTitle);
    















}); 