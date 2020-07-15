document.getElementById("password-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const input = document.getElementById("password").value;
  if (input === "") return;

  // Replace the value in the quotes with the correct password
  if (input === "imagination") {
    document.getElementById("message").innerHTML = "Correct! You may now download the bonus material:";
    document.getElementById("download").disabled = false;
  } else {
    document.getElementById("message").innerHTML = "That is not the correct password. Note - all letters are lowercase.";
  }
})