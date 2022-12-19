function myFunction() {
    document.getElementById("Products").classList.toggle("show");
}

function myFunction1() {
    document.getElementById("Domains").classList.toggle("show");
}

function myFunction2() {
    document.getElementById("Support").classList.toggle("show");
}

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