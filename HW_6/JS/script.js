function myFunction() {
    var x = document.getElementById("nav-menu");
    var c = document.getElementById("content");

    if (x.style.display === "flex") {
        x.style.display = "none";

    } else {
        x.style.display = "flex";
        c.style.marginLeft = 300;
    }
}