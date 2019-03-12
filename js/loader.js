var timeout;

function loader() {
    timeout = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("fullContent").style.display = "block";
}