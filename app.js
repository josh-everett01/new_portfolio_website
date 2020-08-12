const button = document.getElementById('contact');
button.addEventListener('click', showContactInfo);

function showContactInfo() {
  document.getElementById('flex-container').style.display = "none";
  document.getElementById('card-container').style.display = "none";
document.getElementById('hidden-contact').style.display = "inline";
}