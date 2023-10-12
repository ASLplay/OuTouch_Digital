// Кнопка выпада
function myFunction() {
    console.log("ytttr");
    document.getElementById("myDropdown").classList.toggle("show");
}

// Кнопка выпада
function myFunctionMini() {
    console.log("ytttr");
    document.getElementById("myminiDropdown").classList.toggle("show");
}

// Cписок меню
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

