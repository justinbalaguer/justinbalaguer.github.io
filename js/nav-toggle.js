function toggleNav() {
  var x = document.getElementById("mainNavigation");
  if (x.className === "mainNav") {
    x.className += " responsive";
  } else {
    x.className = "mainNav";
  }
}