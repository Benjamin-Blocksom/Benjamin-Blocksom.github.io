const modal = document.getElementById("modal");
const btn = document.getElementById("modal-btn");
const span = document.getElementsByClassName("modal-close")[0];

// open modal
btn.onclick = function() {
  modal.style.display = "block";
}

// close modal
span.onclick = function() {
  modal.style.display = "none";
}

// click outside window? close it.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
