const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.innerHTML = "☀️ Light Mode";
    }else{
        themeBtn.innerHTML = "🌙 Dark Mode";
    }

});

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you for contacting me!");

    form.reset();

});