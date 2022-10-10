var menu = document.getElementsByClassName("menu");
var toogleMenu = document.getElementById("toogleMenu");
var ps = document.querySelectorAll("p");

menu[0].addEventListener("click", function() {
    if(toogleMenu.classList.contains("toogleMenu") ) {
        toogleMenu.classList.remove("toogleMenu")
        for(var i = 2; i < 4; i++) {
            ps[i].style.transition = "1.5s"
            ps[i].style.display = "none"
        }
    } else {
        toogleMenu.classList.add("toogleMenu")
        for(var i = 2; i < 4; i++) {
            ps[i].style.transition = "2.5"
            ps[i].style.display = "block"
        }
    }
 })

