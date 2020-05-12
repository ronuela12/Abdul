const slideoutMenu = document.getElementById("slideout-menu");
const menuIcon = document.getElementById("menu-icon");
//const navBar = document.getElementById("navbar");
const navBar = document.querySelector("nav");
const menuIconClose = document.getElementById("menu-close");




menuIcon.addEventListener('click', function () {
    if (slideoutMenu.style.opacity == "1") {
      slideoutMenu.style.opacity = '0';
      slideoutMenu.style.pointerEvents = 'none';

      //menuIcon.style.opacity = '1';
      //menuIconClose.style.opacity = '0';
    } else {
      slideoutMenu.style.opacity = '1';
      slideoutMenu.style.pointerEvents = 'auto';

      //menuIcon.style.opacity = '0';
      //menuIconClose.style.opacity = '1';
    }
  });
  //menuIconClose.addEventListener('click', function () {
  //  if (slideoutMenu.style.opacity == "1") {
  //    slideoutMenu.style.opacity = '0';
  //    slideoutMenu.style.pointerEvents = 'none';

      //menuIcon.style.opacity = '1';
      //menuIconClose.style.opacity = '0';
  //  } else {
  //    slideoutMenu.style.opacity = '1';
  //    slideoutMenu.style.pointerEvents = 'auto';

      //menuIcon.style.opacity = '0';
      //menuIconClose.style.opacity = '1';
  //  }
  //});


  
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  //Calls the nav section and name it navBar
  const navBar = document.querySelector("nav");
  //const sideBar = document.querySelector("#slideout-menu");
  //const search = document.querySelector("#searchbox");
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    //If scroll up nav will show
    navBar.style.top = "0";
    navBar.style.transition = '.5s ease-in-out';
    navBar.style.opacity = ".9";
    
    slideoutMenu.style.top = "0";
    slideoutMenu.style.transition = '.5s ease-in-out';
    
    
  } else {
    //if scroll down nav will disappear
    navBar.style.top = "-100px";
    
    slideoutMenu.style.top = "-500px";
    
  }
  prevScrollpos = currentScrollPos;
}





//const test = document.querySelector(".picture .explain");

  //window.addEventListener('scroll', scrollEffect);
  //window.addEventListener('scroll', scrollThis);

  //function scrollEffect() {
    //CHANGE TO <= TO DISAPPEAR WHAT THEY ARE TRYING TO VIEWING
    //if(window.scrollY<=150) {
      //test.style.opacity = '1';
      //test.style.transform = 'translateY(0px)';
      //test.style.transition = '.5s ease-in-out';
      
    //}
    //else {
      //test.style.opacity = '0';
      //test.style.transform = 'translateY(-50px)';
    //}
    

  //}
  //scrollEffect();


  //let sections = document.querySelectorAll(".explain");

//window.onscroll = function fadeIn() {
    //sections.forEach(section => {
        //let sectionSize = section.getBoundingClientRect();
        //let bottomPart = sectionSize.bottom;
        //if (window.scrollY >= bottomPart) {
            //section.style.opacity = "1";
            //section.style.transform = "translateX(0)";
            //section.style.transition = "1s ease-in-out";
        //} else {
            //section.style.opacity = "0";
            //section.style.transform = "translateX(-20px)";
            //section.style.transition = "1s ease-in-out";
        //}
    //});
//}