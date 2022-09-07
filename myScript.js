var sideMenu = document.getElementsByClassName("menu-text");
var mainContent = document.getElementsByClassName("main");

function changeContent (frameworkName,frName) {
  for(let i in mainContent){
    mainContent[i].classList.remove("active");
    mainContent[frameworkName].classList.add("active");
    sideMenu[i].classList.remove("selectedFramework");
    sideMenu[frName].classList.add("selectedFramework");
  } 
 
}

  
 



  