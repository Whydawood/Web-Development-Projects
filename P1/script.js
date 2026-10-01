const button = document.getElementById("changeBtn");

button.addEventListener("click", function () {

    document.getElementById("heading").textContent = "You clicked the button!";

    document.getElementById("message").textContent =
        "JavaScript changed the webpage.";

});