

document.addEventListener('DOMContentLoaded', function(){
    var homePage = document.getElementById('home');
    homePage.style.backgroundColor = "grey";
    homePage.style.color = "white";

    console.log(homePage);

    var homeAbout = document.getElementById('about');
    homeAbout.style.backgroundColor = "";
    homeAbout.style.color = "black";
  
    var homeContact= document.getElementById('contact');
    homeContact.style.color = "black";
    //homeContact.style.top = "100px";


    var headingDiv = document.getElementById('heading');
    headingDiv.style.top = "100px";


    var cardTitle = document.getElementsByClassName("cardName");
    cardTitle.innerHTML = "hi";
    console.log(cardTitle);
    

    let trendTitle = document.getElementById("trending");
    trendTitle.textContent = "Product";


   
    
    // getby ID text
    //var img1 = document.getElementById('hrefimg');
    // var img2 = document.getElementById('gallery_item2');
    // var img3 = document.getElementById('gallery_item3');
    // var img4 = document.getElementById('gallery_item4');
    // var img5 = document.getElementById('gallery_item5');
    // var img6 = document.getElementById('gallery_item6');

    //arr = [img1, img2, img3, img4, img5, img6];
   // arr = [img1];

    const img1 = document.getElementById('hrefimg1');
    const img2 = document.getElementById('hrefimg2');
    const img3 = document.getElementById('hrefimg3');
    const img4 = document.getElementById('hrefimg4');
    const img5 = document.getElementById('hrefimg5');
    const img6 = document.getElementById('hrefimg6');
    arr = [img1, img2, img3, img4, img5, img6]
          for (var i = 0; i < arr.length; i ++)
          arr[i].href = 'message.html';

    // var onClick = function() {
    //     for (var i = 0; i < arr.length; i++){
    //       arr[i].href  = "";
    //     }
    //      console.log(count)

    // }

    img1.addEventListener('click', onClick);
    img2.addEventListener('click', onClick);
    img3.addEventListener('click', onClick);
    //img4.addEventListener('click', onClick);
    //img5.addEventListener('click', onClick);
    //img6.addEventListener('click', onClick);


    















}); 